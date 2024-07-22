import { BookProvider } from "@/context/bookContext";
import { OpenProvider } from "@/context/openContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <OpenProvider><BookProvider><Component {...pageProps} /></BookProvider></OpenProvider>;
}
