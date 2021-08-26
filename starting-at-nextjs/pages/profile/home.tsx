import Head from "next/head";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello Next</h1>
      <Image src="/NextImage.png" height={400} width={500} />
      <h2>{data.title}</h2>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();

  return { props: { data } };
}
