export type Track = {
  created_at: string;
  artwork_url: string;
  duration: number;
  id: string;
  title: string;
  description: string;
  url: string;
};

export type TrackGroup = Pick<Track, "id">[];

export type TrackList = Array<Track | Track[]>;

export type MapTrackList = Record<string, TrackList>

export const TrackSource = {
  Soundcloud: "soundcloud",
  Youtube: "youtube",
  Spotify: "spotify",
  Yandex: "yandex",
} as const;

export const TrackSourceRu = {
  spotify: "Спотифай",
  soundcloud: "Саундклауд",
  yandex: "Яндекс",
  youtube: "Ютуб",
} as const;

export type TrackSource = (typeof TrackSource)[keyof typeof TrackSource];
