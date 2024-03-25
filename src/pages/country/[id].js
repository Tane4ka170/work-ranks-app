import Layout from "@/components/Layout/Layout";

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <div>
        <div className={StylesProvider.overview}></div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/all/${params.cioc}`);
  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};
