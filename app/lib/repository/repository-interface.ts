import type { TrackSource, Tracks } from "../../types";

export interface Repository {
  getTracks(source?: TrackSource): Promise<Tracks>;
}
