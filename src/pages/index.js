import Head from "next/head";
import styles from "../styles/home.module.css";
import Layout from "@/components/Layout/Layout";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};