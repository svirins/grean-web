import "@/styles/globals.css";
import "@/styles/app.css";
import "@/styles/prose.css";


import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/app/components/sections/Footer";
import { NavBar } from "@/app/components/sections/NavBar";
import { Montserrat } from "next/font/google";
import { Spacer } from "@/app/components/Spacer";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://doctorgrean.by"),
  title: {
    template: "%s | Психотерапевт Валерий Гринь",
    default: "Доктор Валерий Гринь. Психотерапевтическая помощь в Минске.",
  },
  description:
    "Психотерапевтическое лечение неврозов, депрессий, тревоги, страхов, психосоматических расстройств. Лечение Алкогольной и игровой зависимостей. Семейная терапия.",
  keywords: [
    "Психотерапия",
    "Психотерапевт",
    "Депрессия",
    "Тревога",
    "Зависимость",
    "Фобии и страхи",
    "Семейная терапия",
  ],
  creator: "Валерий Гринь",
  generator: "Next.js",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Доктор Валерий Гринь. Психотерапевтическая помощь в Минске.",
    description:
      "Психотерапевтическое лечение неврозов, депрессий, тревоги, страхов, психосоматических расстройств. Лечение Алкогольной и игровой зависимостей. Семейная терапия.",
    url: "https://doctorgrean.by",
    siteName: "Сайт сихотерапевта Валерия Гриня",
    images: [
      {
        url: "https://doctorgrean.by/opengraph-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const isThemeCookieSet = cookieStore.has("theme");
  const defaultTheme = isThemeCookieSet ? cookieStore.get("theme")?.value : "";
  return (
    <html
      lang="ru"
      suppressHydrationWarning={true}
      className={`scroll-smooth ${defaultTheme}`}
      translate="no"
    >
      <body className={`font-sans ${montserrat.variable}  antialiased`}>
        <Toaster position="top-center" />
        <div className="bg-white transition duration-500 dark:bg-gray-900">
          <NavBar />
          <main id="skip">{children}</main>
          <Spacer size="sm" />
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
