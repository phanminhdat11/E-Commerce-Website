"use client"
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import Footer from "@/components/layouts/Footter";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} min-h-screen text-black`}>
        <Provider store={store}>
          <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Navbar />
          </header>
          <div className="pt-16 md:pt-20">
            <Sidebar />
            <main className="min-h-[calc(100vh-4rem)] px-4 py-4 sm:px-5 md:ml-20 md:min-h-[calc(100vh-5rem)] md:px-6 md:py-6 lg:ml-64 lg:px-8">
              {children}
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </Provider>

      </body>
    </html>
  );
}
