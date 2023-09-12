import React, { useState } from "react";
import Header from "../../components/header";
import TabOptions from "../../components/tabOptions";
import Footer from "../../components/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/nightLife";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case 0:
      return <Delivery />;
      break;
    case 1:
      return <DiningOut />;
      break;
    case 2:
      return <NightLife />;
      break;
    default:
      return <Delivery />;
  }
};
export default Home;
