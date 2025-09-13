import type { Route } from "./+types/home";
import { getSource } from "~/lib/get-source";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import { ContentfulRepository } from "~/lib/repository/index.server";
import { config } from "~/lib/config/index.server";
import { useSearchParams } from "react-router";
import { Header, Links, Filters } from "~/сomponents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dima Studitsky lib" },
    { name: "description", content: "Welcome to library of Dima Studitsky sets!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const source = getSource(url.searchParams.get(SOURCE_SEARCH_PARAM_NAME));
  const contentfulRepository = new ContentfulRepository(config.contentful);

  const [trackList, totalTrackCount] = await Promise.all([
    contentfulRepository.getTrackList(source),
    contentfulRepository.getTotalTrackCount(),
  ]);

  return { trackList, totalTrackCount };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { totalTrackCount } = loaderData;
  const [searchParams] = useSearchParams();
  const activeSource = getSource(searchParams.get(SOURCE_SEARCH_PARAM_NAME));
  
  const headerItems = ["Dima Studitsky", `${totalTrackCount} sets in library`, "Дима Студицкий"]

  console.log(activeSource)

  return (
    <>
      <Header items={headerItems}/>
      <Links/>
      <Filters />

      {/* <pre>{JSON.stringify(trackList, null, 2)}</pre> */}

      <Filters isBottom/>
      <Links/>
      <Header items={headerItems.reverse().toSpliced(1, 1, `${totalTrackCount} сета в библиотеке`)}/>
    </>
  );
}
