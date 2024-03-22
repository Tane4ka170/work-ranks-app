const { default: Head } = require("next/head");

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Layout;
