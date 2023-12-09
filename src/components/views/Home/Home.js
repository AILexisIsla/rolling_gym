import React from "react";
import Testimonials from "../../../assets/Testimonials/Testimonials";
import Programs from "../../Programs/Programs";
import Hero from "../../Hero/Hero";
import Reasons from "../../Reasons/Reasons";
import Plans from "../../Plans/Plans";
import ContactUs from "../../contactUs/contactUs";
import Footer from "../../Footer/Footer";

const Home = ({ isLoggedIn, SetIsLoggedIn }) => {
  return (
    <div>
      <Hero isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
