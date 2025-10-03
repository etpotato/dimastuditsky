import type { Track, TrackGroup, TrackListByYear, Tracks } from "~/types";
import type { CtflTrack, CtflTrackGroup } from "../contentful-types";

export function mapTracks(ctflResponse: {
  tracks: CtflTrack[];
  groups: CtflTrackGroup[];
}): Tracks {
  const tracks = ctflResponse.tracks.map(mapTrack);
  const groups = ctflResponse.groups.map(mapGroup);

  const trackIdsFromGroups = new Set(groups.flat(2).map((track) => track.id));
  const tracksWithoutGroups = tracks.filter(
    (track) => !trackIdsFromGroups.has(track.id)
  );

  const trackGroups: Array<Array<Track>> = [];

  for (const group of groups) {
    const trackInGroupIds = new Set(group.map((track) => track.id));
    const tracksInGroup = tracks
      .filter((track) => trackInGroupIds.has(track.id))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    if (tracksInGroup.length > 0) {
      trackGroups.push(tracksInGroup);
    }
  }

  const trackList = [...tracksWithoutGroups, ...trackGroups].sort(
    (a, b) =>
      (Array.isArray(b)
        ? new Date(b[0].created_at).getTime()
        : new Date(b.created_at).getTime()) -
      (Array.isArray(a)
        ? new Date(a[0].created_at).getTime()
        : new Date(a.created_at).getTime())
  );

  const trackListByYear: TrackListByYear = {};

  for (const track of trackList) {
    const trackDate = new Date(
      Array.isArray(track) ? track[0].created_at : track.created_at
    );
    const year = trackDate.getFullYear();

    if (!trackListByYear[year]) {
      trackListByYear[year] = [];
    }

    trackListByYear[year].push(track);
  }

  return { trackListByYear, total: trackList.length };
}

function mapTrack(ctflTrack: CtflTrack): Track {
  return {
    id: ctflTrack.sys.id,
    ...ctflTrack.fields,
  };
}

function mapGroup(ctflGroup: CtflTrackGroup): TrackGroup {
  return ctflGroup.fields.tracks.map((track) => ({ id: track.sys.id }));
}
