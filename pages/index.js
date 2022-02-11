import Head from 'next/head';
import Body from '../src/components/body';
import Layout from '../src/components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Body />
    </Layout>
  )
}
