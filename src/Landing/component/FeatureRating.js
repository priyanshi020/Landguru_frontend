import React, { useState, useEffect } from "react";
import "./CSS/featureRating.css";
import eye from "../../Images/eye.png";
import Rating from "@mui/material/Rating";
import { SECONDARY } from "../../styles/color";
import { API_URL, IMAGE_PATH } from "../../ServiceModule/Service";
const FeatureRating = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/reviews/getAll`);
        const data = await response.json();
        setProducts(data);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="carousel-container">
      <div className="carousel shadow shadow-md">
        {products.length > 0 ? (
          products.map((product) => (
            <a href="#" className="product-card" key={product._id}>
              <img
                src={`${IMAGE_PATH}/${product.image}`}
                alt={product.title}
                height={300}
                widht={464}
              />
              <div>
                <Rating
                  name="simple-controlled"
                  value={product.stars}
                  readOnly
                />
                <span> {product.stars}.0</span>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                {product.title}
              </p>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat
                class mi vulputate scelerisque in.
              </p>
              <div className="d-flex">
                <img
                  src={eye}
                  height={11}
                  width={20}
                  style={{ marginRight: "10px" }}
                  className="mt-2"
                  alt="eye icon"
                />
                <p style={{ fontSize: "16px", color: "#B5C3CB" }}>
                  {product.studentsWatched} students watched
                </p>
              </div>
            </a>
          ))
        ) : (
          <>
            {[...Array(12)].map((_, index) => (
              <a href="#" className="product-card" key={index}>
                <img
                  src={`https://placehold.co/600x400?text=Product+${index + 1}`}
                  alt={`Product ${index + 1}`}
                />
                <div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <span> 5.0</span>
                </div>
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  How to work with prototype design with adobe xd featuring
                  tools
                </p>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat
                  class mi vulputate scelerisque in.
                </p>
                <div className="d-flex">
                  <img
                    src={eye}
                    height={11}
                    width={20}
                    style={{ marginRight: "10px" }}
                    className="mt-2"
                  />
                  <p style={{ fontSize: "16px", color: "#B5C3CB" }}>
                    2,538 students watched
                  </p>
                </div>
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeatureRating;
