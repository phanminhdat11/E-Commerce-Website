import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} h-screen overflow-hidden`}>
        
        <header className="fixed top-0 left-0 right-0 h-20 z-50 border-b ">
          <Navbar />
        </header>

        <div className="flex pt-20 h-full">

          <aside className="w-64 h-full">
            <Sidebar />
          </aside>


          <main className="flex-1 overflow-y-auto py-4 px-2">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}