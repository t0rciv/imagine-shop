import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <h1>Sobre nós</h1>
      <Link href="/">voltar</Link>
    </>
  );
}
