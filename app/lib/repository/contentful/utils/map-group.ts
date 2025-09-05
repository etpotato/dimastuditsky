import { type TrackGroup } from "../../../../types";
import type { CtflTrackGroup } from "../contentful-types";

export function mapGroup(ctflGroup: CtflTrackGroup): TrackGroup {
  return ctflGroup.fields.tracks.map((track) => ({ id: track.sys.id }));
}
