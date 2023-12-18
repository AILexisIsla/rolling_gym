import React from "react";
import Testimonials from "../../Testimonials/Testimonials.js";
import Programs from "../../Programs/Programs.js";
import Hero from "../../Hero/Hero.js";
import Reasons from "../../Reasons/Reasons.js";
import Plans from "../../Plans/Plans.js";
import ContactUs from "../../contactUs/contactUs.js";
import Footer from "../../Footer/Footer.js";

const Home = ({ loading, SetLoading }) => {
  return (
    <div>
      <Hero loading={loading} SetLoading={SetLoading} />
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
