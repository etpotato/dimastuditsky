import assert from "node:assert";
import { describe, it } from "node:test";

import { mapTracks } from "./map-tracks";
import contentfulTrackList from "../fixtures/contentful-track-list.json";
import tracks from "../fixtures/tracks.json";

describe("mapTrackList", () => {
  it("should return expected result", () => {
    const result = mapTracks(contentfulTrackList);

    assert.deepEqual(result, tracks);
  });
});
