"use client";
import "@/styles/algolia.css";
import "@/styles/algolia-overrides.css";
import { createElement, Fragment, useEffect, useRef } from "react";
import { type Root, createRoot } from "react-dom/client";

import {
  type AutocompleteComponents,
  getAlgoliaResults,
  autocomplete,
} from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { type Hit, setSettings } from "@algolia/client-search";
import { AlgoliaLogo } from "@/app/components/AlgoliaLogo";

type PostHit = Hit<{
  slug: string;
  title: string;
}>;
type PostProps = {
  hit: PostHit;
  components: AutocompleteComponents;
};

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!,
);
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME!;
// indexName.setSettings({
//   hitsPerPage: 10,
// });

export function SearchBar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }
    const search = autocomplete<PostHit>({
      container: containerRef.current,
      placeholder: "Поиск по статьям",
      insights: false,
      translations: {
        clearButtonTitle: "Очистить",
        detachedCancelButtonText: "Очистить",
        submitButtonTitle: "Искать",
      },
      detachedMediaQuery: "none",
      getSources({ query }) {
        return [
          {
            sourceId: "posts",
            getItems() {
              return getAlgoliaResults<PostHit>({
                searchClient,
                queries: [
                  {
                    indexName: indexName,
                    query,
                    params: {
                      hitsPerPage: Number(
                        process.env.NEXT_PUBLIC_ALGOLIA_HITS_PER_PAGE!,
                      ),
                    },
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <SearchItem hit={item} components={components} />;
              },
              noResults() {
                return "Нет результатов";
              },
            },
          },
        ];
      },
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
    });

    return () => {
      search.destroy();
    };
  }, []);

  return (
    <div className="!h-[84px]">
      <AlgoliaLogo />
      <div ref={containerRef} />
    </div>
  );
}

function SearchItem({ hit, components }: PostProps) {
  return (
    <a className="aa-ItemLink" href={`/blog/${hit.slug}`}>
      <div className="aa-ItemContent">
        {/* <div className="ItemCategory">{hit.tags[0]}</div> */}
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}
