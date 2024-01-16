import Link from "next/link";
import { SanityImage } from "@/app/components/SanityImage";
import { type SanityAssetExtended } from "@/app/lib/sanity";
import { type PortableTextReactComponents } from "@portabletext/react";

export const PTComponents: Partial<PortableTextReactComponents> = {
  types: {
    imageWithAlt: ({ value }: { value: SanityAssetExtended }) => {
      return <SanityImage image={value} />;
    },
    callout: ({ value }) => {
      return <p className="callout text-gray-800">{value.callout}</p>;
    },
    break: ({ value }) =>
      value ? <hr className="horizontal-divider" /> : <></>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "square" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "decimal" }}>{children}</li>
    ),
  },
  marks: {
    internalLink: ({ children, value }) => {
      const { slug } = value;
      const href = `/blog/${slug}`;
      return <Link href={href}>{children}</Link>;
    },
    externalLink: ({ children, value }) => {
      const { href = "", blank = false, title } = value;
      const isInternal = href.includes("doctorgrean.by");
      return isInternal ? (
        <Link href={href} title={title} className="cursor-pointer">
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className="cursor-pointer"
          title={title}
          target={blank ? "_blank" : "_self"}
          rel="norefferer noreferrer"
        >
          {children}
        </a>
      );
    },
    superscript: ({ children }) => (
      <sup className="align-super">{children}</sup>
    ),
    italic: ({ children }) => <i className="font-medium">{children}</i>,
    em: ({ children }) => <em className="text-bold">{children}</em>,
    highlight: ({ children }) => <span className="highlight">{children}</span>,
  },
  block: {
    h3: ({ children, value }) => (
      <h3 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h3>
    ),
    h4: ({ children, value }) => (
      <h4 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h4>
    ),
    h5: ({ children, value }) => (
      <h5 id={`${value._key}`}>
        <a href={`#${value._key}`} className="anchor scrollable"></a>
        {children}
      </h5>
    ),
    blockquote: ({ children }) => (
      <div className="py-1">
        <blockquote className="flex">
          <p>{children}</p>
        </blockquote>
      </div>
    ),
    normal: ({ children }) => <p className="mt-1">{children}</p>,
  },
};
