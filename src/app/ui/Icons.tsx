import classnames from "classnames";

const arrowRotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135",
};

export function ArrowIcon({
  direction,
  size = 32,
  className,
}: {
  direction: "up" | "right" | "down" | "left" | "top-right";
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={classnames(
        className,
        "transform",
        arrowRotationMap[direction],
      )}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronDownIcon({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 10.75L12 14.25L8.75 10.75"
      />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.25 8.75L9.75 12L13.25 15.25"
      />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.75 8.75L14.25 12L10.75 15.25"
      />
    </svg>
  );
}

export function ChevronUpIcon({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 14.25L12 10.75L8.75 14.25"
      />
    </svg>
  );
}

export function EmojiHappyIcon({ size = 24 }: { size?: number } = {}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.75 4.75h6.5a4 4 0 014 4v6.5a4 4 0 01-4 4h-6.5a4 4 0 01-4-4v-6.5a4 4 0 014-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.75 12.75S9 15.25 12 15.25s4.25-2.5 4.25-2.5"
      />
      <circle cx={14} cy={10} r={1} fill="currentColor" />
      <circle cx={10} cy={10} r={1} fill="currentColor" />
    </svg>
  );
}

export function HeartIcon({ size = 24 }: { size?: number } = {}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InstagramIcon({
  size = 24,
  title = "Instagram",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <title>{title}</title>
      <path
        d="M4.75 7.75a3 3 0 013-3h8.5a3 3 0 013 3v8.5a3 3 0 01-3 3h-8.5a3 3 0 01-3-3v-8.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 13a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        d="M4.75 8.75L12 4.75L19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9L13.25 13.25H10.75L5 9"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="9" width="20" height="2" rx="1" fill="currentColor" />
      <rect x="6" y="15" width="20" height="2" rx="1" fill="currentColor" />
      <rect x="6" y="21" width="20" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

export function MessageIcon({ size = 24 }: { size?: number } = {}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.25c3.5 0 7.25-1.75 7.25-6.25S15.5 5.75 12 5.75 4.75 7.5 4.75 12c0 1.03.196 1.916.541 2.67.215.47.336.987.24 1.495l-.262 1.399a1 1 0 001.168 1.167l3.207-.602a2.24 2.24 0 01.764-.003c.527.084 1.062.124 1.592.124z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 12a.5.5 0 11-1 0 .5.5 0 011 0zM15.5 12a.5.5 0 11-1 0 .5.5 0 011 0z"
      />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg
      className="w-full"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"
        fill="currentColor"
      />
    </svg>
  );
}

export function RssIcon({
  size = 24,
  title = "RSS",
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33465 15.52C6.23018 15.52 5.33459 16.4153 5.33459 17.5199C5.33459 18.6244 6.23018 19.5201 7.33465 19.5201C8.43912 19.5201 9.33471 18.6244 9.33471 17.5199C9.33471 16.4153 8.43912 15.52 7.33465 15.52Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33472 10.52V13.0919C8.87972 13.0919 11.7639 15.9753 11.7639 19.5202H14.3347C14.3347 14.5577 10.2973 10.52 5.33472 10.52Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33472 5.52002V8.18702C11.5846 8.18702 16.6688 13.2701 16.6688 19.52H19.3347C19.3347 11.8001 13.0546 5.52002 5.33472 5.52002Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75068 11.3405C1.65161 9.23359 1.65161 5.80439 3.75068 3.69748C4.76756 2.67681 6.11976 2.11292 7.55689 2.11292C8.99619 2.11292 10.3484 2.67681 11.3653 3.69748C13.4622 5.80439 13.4622 9.23359 11.3653 11.3405C9.2662 13.4452 5.84975 13.4452 3.75068 11.3405ZM18 16.4548L13.595 12.0333C15.7986 9.06529 15.5874 4.8471 12.9047 2.15226C10.0479 -0.715235 5.06587 -0.719606 2.21121 2.15226C-0.737072 5.10937 -0.737072 9.9286 2.21121 12.8857C3.68536 14.3654 5.62112 15.1041 7.55906 15.1041C9.14861 15.1041 10.7229 14.5752 12.0555 13.5785L16.4605 18L18 16.4548Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SpinnerIcon({
  size = 24,
  ...svgProps
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function SquareIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <rect
        width="12.5"
        height="12.5"
        x="5.75"
        y="5.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        rx="1"
      />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg
      className="w-full"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TriangleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
      />
    </svg>
  );
}

export function UsersIcon({ size = 24 }: { size?: number } = {}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
      />
      <circle
        cx="9.5"
        cy="7.5"
        r="2.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
      />
    </svg>
  );
}

export function YoutubeIcon({
  size = 24,
  title = "YouTube",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <title>{title}</title>
      <path
        fill="currentColor"
        d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
      />
    </svg>
  );
}

export function RefreshIcon({
  size = 24,
  title = "Refresh",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <title>{title}</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 4.75 8.75 7l2.5 2.25M12.75 19.25l2.5-2.25-2.5-2.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 7h3.5a6 6 0 0 1 6 6v.25M14.25 17h-3.5a6 6 0 0 1-6-6v-.25"
      />
    </svg>
  );
}

export function AlarmIcon({
  size = 24,
  title = "Alarm",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <title>{title}</title>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18L5.75 19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 18L18.25 19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8.75V12L14.25 14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 4.75L19.25 5.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 4.75L4.75 5.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
}
