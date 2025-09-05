import { TrackSource } from "~/types";

export function getSource(
  queryParamValue?: string | null
): TrackSource | undefined {
  const source =
    Object.values(TrackSource).find((value) => value === queryParamValue) ||
    undefined;

  return source;
}
