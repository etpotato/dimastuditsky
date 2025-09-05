import type { Track } from "../../../types";

export type CtflTrack = {
  sys: Pick<Track, "id">;
  fields: Omit<Track, "id">;
};

export type CtflTrackGroup = {
  fields: {
    tracks: {
      sys: Pick<Track, "id">;
    }[];
  };
};
