"use client";
import "@algolia/autocomplete-theme-classic";
import "instantsearch.css/themes/satellite.css";
import {
  type AutocompleteComponents,
  getAlgoliaResults,
} from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";

import { type Item, Autocomplete, SearchItem } from "@/app/components/Algolia";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!,
);

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME!;
export function SearchBar() {
  // TODO: remove nasty hack of setting default value

  return (
    <div>
      <Autocomplete
        openOnFocus={false}
        detachedMediaQuery=""
        placeholder="Поиск по статьям"
        getSources={({ query }: { query: string }) => [
          {
            sourceId: "posts",
            getItemUrl({ item }: { item: Item }) {
              return `/blog/${item.slug}`;
            },
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName,
                    query,
                  },
                ],
              });
            },
            templates: {
              item({
                item,
                components,
              }: {
                item: Item;
                components: AutocompleteComponents;
              }) {
                return <SearchItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
}
