import Nav from "@/components/Nav";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Cooking App",
  description: "A simple cooking app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        <div className="container mx-auto p-5">{children}</div>
      </body>
    </html>
  );
}
