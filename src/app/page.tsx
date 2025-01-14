import React from "react";
import Main from "@/components/Main";
import Feature from "@/components/Feature";
import CommentSection from "@/components/Commentsection";
import AboutUs from "./about/page";
import ProductList from "./products/page";
export default function Home() {
  return (
    <div className=" bg-white">
      
      <Main/>
      <Feature/>
    <ProductList/>
    <CommentSection/>

    </div>
  );
}
<AboutUs/>
 