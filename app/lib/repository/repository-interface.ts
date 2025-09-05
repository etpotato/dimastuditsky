import type { TrackList, TrackSource } from "../../types";

export interface Repository {
  getTrackList(source?: TrackSource): Promise<TrackList>;
  getTotalTrackCount(): Promise<number>;
}
