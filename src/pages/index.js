import Head from "next/head";
import styles from "../styles/home.module.css";
import Layout from "@/components/Layout/Layout";
import SearchInput from "@/components/SearchInput/SearchInput";
import CountriesTable from "@/components/CountriesTable/CountriesTable";
import { useState } from "react";

export default function Home({ countries }) {
  console.log(countries);
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = () => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput
        placeholder="Filter by Name, Region or Subregion"
        onChange={onInputChange}
      />
      <CountriesTable countries={filteredCountries} />
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
