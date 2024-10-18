import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import imageOne from "../images/01.jpg";
import imageTwo from "../images/02.jpg";
import imageThree from "../images/03.jpg";
import imageFour from "../images/04.jpg";
import { Box } from "@mui/material";

const dummyProducts = [
  {
    img: imageOne,
    name: "Elegance Living",
    desc: "Discover Elegance Living, where modern furniture meets timeless comfort. Our curated pieces combine style and functionality.",
  },
  {
    img: imageTwo,
    name: "Elegance Living",
    desc: "Discover Elegance Living, where modern furniture meets timeless comfort. Our curated pieces combine style and functionality.",
  },
  {
    img: imageThree,
    name: "Elegance Living",
    desc: "Discover Elegance Living, where modern furniture meets timeless comfort. Our curated pieces combine style and functionality.",
  },
  {
    img: imageFour,
    name: "Elegance Living",
    desc: "Discover Elegance Living, where modern furniture meets timeless comfort. Our curated pieces combine style and functionality.",
  },
];

const Products = () => {
  // Return Code
  return (
    <>
      <Box className="d-flex gap-5 p-5 ps-5 ms-5">
        {dummyProducts?.map((product, index) => {
          return (
            <Card sx={{ maxWidth: 250 }} key={index}>
              <img src={product.img} className="img-fluid" alt="" />
              <Typography gutterBottom variant="h5" className="pt-3" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.desc}
              </Typography>
              <Button size="small" className="pt-3" color="primary">
                Share
              </Button>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Products;
