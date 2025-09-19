import type { TrackSource, MapTrackList } from "../../types";

export interface Repository {
  getTrackList(source?: TrackSource): Promise<MapTrackList>;
  getTotalTrackCount(source?: TrackSource): Promise<number>;
}
