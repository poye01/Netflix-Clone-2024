import React from "react";
import Header from "../../Components/Header/Header";
import Banners from "../../Components/Banner/Banners";
import RowList from "../../Components/Rows/RowList/RowList";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Banners />
      <RowList />
      <Footer />
    </>
  );
}
export default Home;
