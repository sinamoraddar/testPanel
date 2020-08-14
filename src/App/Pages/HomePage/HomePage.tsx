import React from "react";
//components
import Header from "App/Components/Header/Header";
import SideBar from "App/Components/SideBar/SideBar";
//styles
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <SideBar />
      </section>
    </>
  );
};

export default HomePage;
