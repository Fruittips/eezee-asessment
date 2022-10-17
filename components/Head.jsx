import Head from "next/head";

export default function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="Mah Yi Da" content="Internship Assessment for Eezee" />
      <link rel="icon" href="/favicon-eezee.svg" />
    </Head>
  );
}
