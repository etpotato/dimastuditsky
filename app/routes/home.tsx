import type { Route } from "./+types/home";
import { getSource } from "~/lib/get-source";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import { ContentfulRepository } from "~/lib/repository/index.server";
import { config } from "~/lib/config/index.server";
import { Header, Links, Filters, Sets } from "~/components";
import { TrackSourceRu } from "~/types";
import { getPluralSet, uppercase } from "~/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dima Studitsky lib" },
    {
      name: "description",
      content: "Welcome to library of Dima Studitsky sets!",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const source = getSource(url.searchParams.get(SOURCE_SEARCH_PARAM_NAME));
  const contentfulRepository = new ContentfulRepository(config.contentful);

  const { trackListByYear, total } =
    await contentfulRepository.getTracks(source);

  return { trackListByYear, total, source };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { trackListByYear, total, source } = loaderData;
  const sourceFormatted = source && uppercase(source);
  const headerItemsEn = [
    "Dima Studitsky",
    `${total} ${getPluralSet(total, "en-EN")} ${source ? "on" : "in"} ${source ? sourceFormatted : "library"}`,
    "Дима Студицкий",
  ];
  const headerItemsRu = headerItemsEn
    .toReversed()
    .toSpliced(
      1,
      1,
      `${total} ${getPluralSet(total, "ru-RU")} ${source ? "на" : "в"} ${source ? TrackSourceRu[source] : "библиотеке"}`
    );

  return (
    <>
      <Header items={headerItemsEn} />
      <Links />
      <Filters />
      <Sets trackList={trackListByYear} />
      <Filters isBottom />
      <Links isBottom/>
      <Header items={headerItemsRu} />
    </>
  );
}
