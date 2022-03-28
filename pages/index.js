import Head from 'next/head';
import Navigation from '../Nagivation/Navigation';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navigation />
        <h1>Use navigation to get somewhere...</h1>
      </main>
    </>
  );
}
