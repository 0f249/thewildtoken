import React from "react";
// import AirdropSignup from "./airdrop-signup";
// import BlogPreview from "./blog-preview";
import Feature from "./features";
import HeaderComponent from "./header";
import MakeInIndia from "./make-in-india";
import Testimonial from "./testimonial";

const Index = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Feature />
      <Testimonial />
      <MakeInIndia />
      {/* <BlogPreview /> */}
      {/* <AirdropSignup /> */}
    </React.Fragment>
  );
};

export default Index;
