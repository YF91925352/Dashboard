import React from "react";
import { Box } from "@mui/material";

import Header from "components/Header";
import { useGetProductsQuery } from "state/api";

const Products = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your list of products." />
    </Box>
  );
};

export default Products;
