import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Header } from "@/components/header";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Caretaker LandingPage",
  description:
    "Caretaker's landing page recreated by https://x.com/csi0x",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={open_sans.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="mb-16 overflow-hidden bg-page-gradient pt-[var(--navigation-height)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
