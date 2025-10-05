import { type ContentfulClientApi, createClient } from "contentful";
import type { TrackSource, Tracks } from "../../../types";
import type { Repository } from "../repository-interface";
import type { CtflTrack, CtflTrackGroup } from "./contentful-types";
import { getSourceMatch, mapTracks } from "./utils";

export class ContentfulRepository implements Repository {
  private client: ContentfulClientApi<undefined>;

  constructor({ cdaToken, spaceId }: { cdaToken: string; spaceId: string }) {
    this.client = createClient({
      accessToken: cdaToken,
      space: spaceId,
    });
  }

  public async getTracks(source?: TrackSource): Promise<Tracks> {
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
    const tracks = mapTracks({
      tracks: tracksResponse.items as unknown as CtflTrack[],
      groups: groupsResponse.items as unknown as CtflTrackGroup[],
    });

    return tracks;
  }
}
