import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";
import { GlobalStyles } from "../../Global.styles";

const fonfamily = localFont({
  src: [
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADEOkineSansPERSONALUSE-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
      disableScroll();
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
      enableScroll();
    };
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
    };

    const enableScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    window.onload = () => {
      setIsLoading(false);
    };
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      window.onload = null;
    };
  }, [router]);

  console.log("luuuuuuuuuuuuuuuuuun");

  return (
    <>
      {isLoading && (
        <div
          css={`
            position: fixed;
            inset: 0;
            width: 100%;
            overflow: hidden;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              180deg,
              rgba(25, 56, 58, 0.1) 0%,
              black 100%
            );
            backdrop-filter: blur(12.5px);
          `}
        >
          <Loader />
        </div>
      )}
      <div className={fonfamily.className}>
        <GlobalStyles />
        <Layout>
          <div id="wrapper">
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
    </>
  );
}
