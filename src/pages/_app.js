import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Magnetic from "../components/Layout/Magnetic";
import Link from "next/link";
import "@/styles/styles.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="header ">
        <Magnetic>
          <Link href="/">Loop</Link>
        </Magnetic>
       
          <Magnetic>
            <Link href="/about">About</Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact">Contact</Link>
          </Magnetic>
          <Magnetic>
            <Link href="/">Get started </Link>
          </Magnetic>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
