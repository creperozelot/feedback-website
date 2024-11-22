import "@/styles/globals.css";
import 'survey-core/defaultV2.min.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
