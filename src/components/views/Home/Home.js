import React from "react";
import Testimonials from "../../../assets/Testimonials/Testimonials";
import Programs from "../../Programs/Programs";
import Hero from "../../Hero/Hero";
import Reasons from "../../Reasons/Reasons";
import Plans from "../../Plans/Plans";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
};

export default Home;
