import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getSource } from "~/lib/get-source";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import { ContentfulRepository } from "~/lib/repository/index.server";
import { config } from "~/lib/config/index.server";
import { TrackSource } from "~/types";
import styles from "./home.module.css";
import { useSearchParams } from "react-router";
import cn from "classnames";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const source = getSource(url.searchParams.get(SOURCE_SEARCH_PARAM_NAME));
  const contentfulRepository = new ContentfulRepository(config.contentful);

  const trackList = await contentfulRepository.getTrackList(source);

  return { trackList };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { trackList } = loaderData;
  const [searchParams] = useSearchParams();
  const activeSource = getSource(searchParams.get(SOURCE_SEARCH_PARAM_NAME));

  return (
    <>
      <Welcome />
      <ul className={styles.list}>
        <li>
          <a
            href="/"
            className={cn(styles.chip, { [styles.active]: !activeSource })}
          >
            All
          </a>
        </li>
        {Object.values(TrackSource).map((source) => (
          <li
            key={source}
            className={cn(styles.chip, {
              [styles.active]: source === activeSource,
            })}
          >
            <a href={`/?${SOURCE_SEARCH_PARAM_NAME}=${source}`}>{source}</a>
          </li>
        ))}
      </ul>

      <pre>{JSON.stringify(trackList, null, 2)}</pre>
    </>
  );
}
