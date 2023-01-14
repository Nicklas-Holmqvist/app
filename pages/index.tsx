import Head from 'next/head';

import kurhuset from '../data/kurhuset.json';

export default function Home() {
  const found = kurhuset.data.filter((person) =>
    person.efternamn?.toLowerCase().includes('gun')
  );

  return (
    <>
      <Head>
        <title>Riksarkivet nedladdningsbara datamängder</title>
        <meta name="description" content="Skapad av Nicklas Holmqvist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Om sidan</p>
      </main>
    </>
  );
}
