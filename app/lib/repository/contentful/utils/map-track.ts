import { type Track } from "../../../../types";
import type { CtflTrack } from "../contentful-types";

export function mapTrack(ctflTrack: CtflTrack): Track {
  return {
    id: ctflTrack.sys.id,
    ...ctflTrack.fields,
  };
}
