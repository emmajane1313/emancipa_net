import type { Metadata } from "next";
import "./globals.css";
import CRTCanvas from "./components/Common/modules/CRTImage";
import Video from "./components/Common/modules/Video";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://emancipa.net/"),
  title: "Emancipate the Net",
  description:
    "And there’s no point raising problems with people who don't learn how to understand them, in a system that wasn’t built for you, and still isn’t.",
  twitter: {
    card: "summary_large_image",
    title: "Emancipate the Net",
    description:
      "And there’s no point raising problems with people who don't learn how to understand them, in a system that wasn’t built for you, and still isn’t.",
    creator: "@emmajane1313",
  },
  openGraph: {
    title: "Emancipate the Net",
    description:
      "And there’s no point raising problems with people who don't learn how to understand them, in a system that wasn’t built for you, and still isn’t.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "Women",
    "Life",
    "Freedom",
  ],
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.xyz/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <div className="w-full h-screen overflow-hidden">
            <CRTCanvas />
            <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>
            <Video />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
