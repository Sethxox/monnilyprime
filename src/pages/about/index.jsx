import Stairs from "@/components/Layout/Stairs";
import Head from "next/head";
import RoundedButton from "../../components/Layout/RoundedButton";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs backgroundColor={"#BCF366"}>
        <h1 className="text-center font-black text-7xl pb-7">About</h1>
        <div className="body">
          <p>
            Nullam mattis mattis dictum. Praesent sit amet condimentum mi, quis
            venenatis lectus. Phasellus ac ante id purus viverra hendrerit quis
            at ex. Donec vitae augue pulvinar augue dictum fermentum dapibus nec
            tellus.
          </p>
          <p>
            Phasellus cursus, ante in eleifend vehicula, leo metus mattis est,
            sit amet dignissim dui nibh in dui. Nullam dictum tortor vitae quam
            condimentum, eget tincidunt nisi tincidunt. Praesent ut erat at
            purus gravida aliquam non a purus. Pellentesque sagittis in justo
            vel venenatis.
          </p>
        </div>
      </Stairs>
      <div className="text-blue-50 px-[2.5rem] py-[2rem] flex justify-evenly">
        <RoundedButton>
          <p className="py-4 font-semibold ">
            <Link href="/faq">FAQ</Link>
          </p>
        </RoundedButton>
        <RoundedButton>
          <p className="py-4 font-semibold ">
            <Link href="/privacypolicy">Privacy Policy</Link>
          </p>
        </RoundedButton>
        <RoundedButton>
          <p className="py-4 font-semibold ">
            <Link href="/contact">Contact</Link>
          </p>
        </RoundedButton>
        <RoundedButton>
          <p className="py-4 font-semibold ">
            <Link href="/">Home</Link>
          </p>
        </RoundedButton>
      </div>
    </>
  );
}
