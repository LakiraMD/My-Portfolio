import { Html, Head, Main, NextScript } from "next/document";
import Preloader from "@/components/Preloader";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <style>{Preloader}</style>
      </head>
      <body>
        <div id={"globalLoader"}>
          <div className="loader">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
