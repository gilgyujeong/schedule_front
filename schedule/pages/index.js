import MainContainer from "../src/components/main/main.container";
import Layout from "../src/components/commons/layout/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
}
