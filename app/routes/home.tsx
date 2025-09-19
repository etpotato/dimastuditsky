import type { Route } from "./+types/home";
import { getSource } from "~/lib/get-source";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import { ContentfulRepository } from "~/lib/repository/index.server";
import { config } from "~/lib/config/index.server";
import { Header, Links, Filters, Sets } from "~/сomponents";

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
    contentfulRepository.getTotalTrackCount(source),
  ]);

  return { trackList, totalTrackCount, source };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { trackList, totalTrackCount, source } = loaderData;

  const sourceFormatted = `${source?.charAt(0).toUpperCase()}${source?.slice(1)}`
  const headerItems = ["Dima Studitsky", `${totalTrackCount} sets in ${source ? sourceFormatted : 'library'}`, "Дима Студицкий"]
  return (
    <>
      <Header items={headerItems}/>
      <Links/>
      <Filters />
      <Sets  trackList={trackList}/>
      <Filters isBottom/>
      <Links/>
      <Header items={headerItems.reverse().toSpliced(1, 1, `${totalTrackCount} сета в ${source ? sourceFormatted : 'библиотеке'}`)}/>
    </>
  );
}
