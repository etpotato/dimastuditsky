import type { TrackList, TrackSource } from "../../../types";
import type { Repository } from "../repository-interface";
import { type ContentfulClientApi, createClient } from "contentful";
import type { CtflTrack, CtflTrackGroup } from "./contentful-types";
import { getSourceMatch } from "./utils/get-source-match";
import { mapTrackList } from "./utils/map-track-list";

export class ContentfulRepository implements Repository {
  private client: ContentfulClientApi<undefined>;

  constructor({ cdaToken, spaceId }: { cdaToken: string; spaceId: string }) {
    this.client = createClient({
      accessToken: cdaToken,
      space: spaceId,
    });
  }

  public async getTrackList(source?: TrackSource): Promise<TrackList> {
    const [tracksResponse, groupsResponse] = await Promise.all([
      this.client.getEntries({
        content_type: "track",
        "fields.url[match]": getSourceMatch(source),
        limit: 1000,
      }),
      this.client.getEntries({
        content_type: "trackGroup",
        select: ["fields.tracks"],
        include: 0,
        limit: 1000,
      }),
    ]);

    const trackList = mapTrackList({
      tracks: tracksResponse.items as unknown as CtflTrack[],
      groups: groupsResponse.items as unknown as CtflTrackGroup[],
    });

    return trackList;
  }

  public async getTotalTrackCount(): Promise<number> {
    const [tracksResponse, groupsResponse] = await Promise.all([
      this.client.getEntries({
        content_type: "track",
        select: ["sys.id"],
        limit: 1000,
      }),
      this.client.getEntries({
        content_type: "trackGroup",
        select: ["fields.tracks"],
        include: 0,
        limit: 1000,
      }),
    ]);

    const trackList = mapTrackList({
      tracks: tracksResponse.items as unknown as CtflTrack[],
      groups: groupsResponse.items as unknown as CtflTrackGroup[],
    });

    return trackList.length;
  }
}
