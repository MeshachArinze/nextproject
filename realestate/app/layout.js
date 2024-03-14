import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { Suspense } from "react";
import { NavigationEvents } from "@/hooks/useRoute";
import nProgress from "nprogress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "real estate",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
nProgress.configure({ showSpinner: false });

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <Layout>
            {children}
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}