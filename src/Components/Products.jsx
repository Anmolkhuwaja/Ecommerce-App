import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import imageOne from "../images/01.jpg";
import imageTwo from "../images/02.jpg";
import imageThree from "../images/03.jpg";
import imageFour from "../images/04.jpg";
import { Box } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

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
  const [cartList, setCartList] = useState([]);  
  console.log(cartList);
  

  const cartHandler = (product) =>{
    const isExist = cartList.find((cart) => cart.id === product.id);

    if(!isExist){
    setCartList((prev) => [...prev, product]); 
    } else{
      alert("Already added")
    }
  };

  // Return Code
  return (
    <>
      <Box className="d-flex gap-5 p-5 ps-5 ms-5">
        {dummyProducts?.map((product, index) => {
          return (
            <Card sx={{ maxWidth: 250, cursor: "pointer" }} key={index}>
              <img
                src={product.img}
                className="img-fluid"
                alt={"${product.name}"}
              />
              <Typography
                gutterBottom
                variant="h5"
                className="pt-3 ps-2"
                component="div"
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                className="ps-2"
                sx={{ color: "text.secondary" }}
              >
                {product.desc}
              </Typography>
              <Box className="d-flex my-3 justify-content-between px-2 align-content-center">
                <Button size="small" sx={{ backgroundColor: "#ffde21" }} className="py-0 px-3 fw-bold text-black">
                  BUY NOW
                </Button>
                <Button onClick={()=>{cartHandler(product);}} size="small" className="px-3 fw-bold text-white bg-black">
                  Add to cart
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Products;
