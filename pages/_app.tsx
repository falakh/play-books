import { TextFieldNavbar } from "../components/text-field";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IoHeartOutline } from "react-icons/io5";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="">
      <div className="shadow-md shadow-black flex flex-row items-center px-4 space-x-3">
        <a href="/">
          <img
            className="mr-3  "
            alt="Book Api Demo"
            width={160}
            src="https://play-lh.googleusercontent.com/DglqS-eYHQYXnj8M8tmzh3JcKDXcidSo3IzgyCZzci8ZTV9Pmuk8vvIFh9XHOztC3Q=w600-h300-pc0xffffff-pd"
          />
        </a>

        <p className="font-bold">Book Api Demo</p>
        <TextFieldNavbar />
        <a href="/favorite" className="flex flex-row items-center space-x-3">
          <IoHeartOutline />
          <p>Favorites</p>
        </a>
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
