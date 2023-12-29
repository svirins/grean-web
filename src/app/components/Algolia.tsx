/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import { autocomplete } from "@algolia/autocomplete-js";
import { type AutocompleteComponents } from "@algolia/autocomplete-js";
import { type Hit } from "@algolia/client-search";

import { createElement, Fragment, useEffect, useRef } from "react";
import { type Root, createRoot } from "react-dom/client";

export function Autocomplete(props: Item) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      // clearButtonTitle: "clearButtonTitle",
      // detachedCancelButtonText: "detachedCancelButtonText",
      // submitButtonTitle: "submitButtonTitle",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      ...props,
    });
    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}

export type Item = Hit<{
  slug: string;
  title: string;
}>;
export type ItemProps = {
  hit: Item;
  components: AutocompleteComponents;
};

export function SearchItem({ hit, components }: ItemProps) {
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
