import Product from "@/src/components/product/Product";
import Recommended from "@/src/components/product/Recommended";
import React from "react";

const page = () => {
  return (
    <div>
      <Product />
      <Recommended />
    </div>
  );
};

export default page;
