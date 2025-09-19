import type { Track, MapTrackList } from "~/types";
import type { CtflTrack, CtflTrackGroup } from "../contentful-types";
import { mapTrack } from "./map-track";
import { mapGroup } from "./map-group";


export function mapTrackList(ctflResponse: {
  tracks: CtflTrack[];
  groups: CtflTrackGroup[];
}):  MapTrackList{
  const tracks = ctflResponse.tracks.map(mapTrack);
  const groups = ctflResponse.groups.map(mapGroup);

  const trackIdsFromGroups = new Set(groups.flat(2).map((track) => track.id));
  const tracksWithoutGroups = tracks.filter(
    (track) => !trackIdsFromGroups.has(track.id)
  );

  const trackWithGroups: Array<Array<Track>> = [];

  for (const group of groups) {
    const trackInGroupIds = new Set(group.map((track) => track.id));
    const tracksInGroup = tracks
      .filter((track) => trackInGroupIds.has(track.id))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    if (tracksInGroup.length > 0) {
      trackWithGroups.push(tracksInGroup);
    }
  }

  const trackList: MapTrackList = {};
  
  [...tracksWithoutGroups, ...trackWithGroups].forEach((track) => {
    const trackDate = new Date(Array.isArray(track) ? track[0].created_at : track.created_at)
    const year = trackDate.getFullYear();

    if (trackList[year]) {
      trackList[year].push(track)
    } else {
      trackList[year] = [track]
    }
  })

  return trackList;
}
