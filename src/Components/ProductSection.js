import React, { useState, useReducer, useCallback, useMemo } from "react";
import Product from "./Product";
// import SolutionStep from "./SolutionStep";
import Doctor from "../Assets/ppr.jpg";
// import Doctor from "../Assets/ppr2.jpg";


import "../Styles/ProductSection.css";
import image1 from "../Assets/fac1.jpg";
import image2 from "../Assets/fac2.jpg";
import Productabout from "./productabout";

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, dispatch] = useReducer(productReducer, {
    selectedMainProduct: null,
    selectedSubProduct: null,
    selectedSubSubProduct: null,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  function productReducer(state, action) {
    switch (action.type) {
      case "SELECT_MAIN_PRODUCT":
        return {
          ...state,
          selectedMainProduct: action.payload,
          selectedSubProduct: null,
          selectedSubSubProduct: null,
        };
      case "SELECT_SUB_PRODUCT":
        return {
          ...state,
          selectedSubProduct: action.payload,
          selectedSubSubProduct: null,
        };
      case "SELECT_SUB_SUB_PRODUCT":
        return { ...state, selectedSubSubProduct: action.payload };

      default:
        return state;
    }
  }

  const products = useMemo(
    () => [
      {
        name: "Main Product 1",
        image: image1,
        description: "Description for Main Product 1.",
        subProducts: [
          {
            name: "Sub Product 1",
            image: image2,
            description: "Description for Sub Product 1.",
            subSubProducts: [
              {
                name: "SubSub Product 1",
                image: image1,
                description: "Description for SubSub Product 1.",
              },
              {
                name: "SubSub Product 2",
                image: image2,
                description: "Description for SubSub Product 2.",
              },
            ],
          },
          {
            name: "Sub Product 2",
            image: image1,
            description: "Description for Sub Product 2.",
            subSubProducts: [
              {
                name: "SubSub Product 3",
                image: image1,
                description: "Description for SubSub Product 3.",
              },
              {
                name: "SubSub Product 4",
                image: image2,
                description: "Description for SubSub Product 4.",
              },
            ],
          },
        ],
      },
      // Add more products as needed
    ],
    []
  );

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        (product.subProducts &&
          product.subProducts.some((subProduct) =>
            subProduct.name.toLowerCase().includes(query)
          ))
    );
    setFilteredProducts(filtered);
  };

  const handleMainProductClick = useCallback((mainProduct) => {
    dispatch({ type: "SELECT_MAIN_PRODUCT", payload: mainProduct });
  }, []);

  const handleSubProductClick = useCallback((subProduct) => {
    dispatch({ type: "SELECT_SUB_PRODUCT", payload: subProduct });
  }, []);

  const handleSubSubProductClick = useCallback((subSubProduct) => {
    dispatch({ type: "SELECT_SUB_SUB_PRODUCT", payload: subSubProduct });
  }, []);

  return (
    <div className="product-section">
      <h1>Our Products</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="Productabout-section" id="about">
        <div className="about-image-content">
          {/* <img src={Doctor} alt="Doctor Group" className="about-image1" /> */}
          <img src={Doctor} alt="Doctor Group" className="about-image3" />
        </div>

        <div className="Productabout-text-content">
          <h3 className="Productabout-title">
            <div>
              Optimized & Industry-ready Solutions For All Your Complicated
              Needs
            </div>
          </h3>

          <p className="Productabout-description">
            <h4>
              The team at Galvanotech surfin Pvt. Ltd. provide an exhaustive
              range of metal finishing products for the Commercial, Industrial,
              Automotive sector and etc.. Our manufacturing facility at Gurugram
              is fully furnished to facilitate both large and complex metal
              finishing product ranges. We offer a fast turnaround at
              competitive prices. We offer metal finishing chemicals for
              cleaning, Zinc & Zinc Alloy Electroplating along with Passivation
              (Cr3) and Top-coats, Electroless Nickel (Mid & High phos), Cr3
              passivation on Aluminium, and Electro-polishing.
            </h4>
          </p>

          <Productabout
            title="01. Pretreatment"
            description="All types of metal alloys benefit from some type of chemical processing to provide a significant improvement in characteristics including hardness, colour,  bonding of coatings, corrosion resistance or simply a visible impact to the surface of the part or component. "
          />

          <Productabout
            title="02. Protective"
            description="Our motto is to secure components against corrosion to increase their lifespan. We carry out a highly-engineered multi-step electro-chemical plating process to make sure the treated components can reach their full performance potential."
          />

          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
          <Productabout
            title="Get Your Solutions"
            description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
          />
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((mainProduct, index) => (
          <div key={index}>
            <Product
              {...mainProduct}
              onClick={() => handleMainProductClick(mainProduct)}
              isSelected={selectedProducts.selectedMainProduct === mainProduct}
            />
            {selectedProducts.selectedMainProduct === mainProduct && (
              <div className="sub-product-list">
                {mainProduct.subProducts &&
                  mainProduct.subProducts.map((subProduct, subIndex) => (
                    <div key={subIndex}>
                      <Product
                        {...subProduct}
                        onClick={() => handleSubProductClick(subProduct)}
                        isSelected={
                          selectedProducts.selectedSubProduct === subProduct
                        }
                      />
                      {selectedProducts.selectedSubProduct === subProduct && (
                        <div className="sub-sub-product-list">
                          {subProduct.subSubProducts &&
                            subProduct.subSubProducts.map(
                              (subSubProduct, subSubIndex) => (
                                <Product
                                  key={subSubIndex}
                                  {...subSubProduct}
                                  onClick={() =>
                                    handleSubSubProductClick(subSubProduct)
                                  }
                                  isSelected={
                                    selectedProducts.selectedSubSubProduct ===
                                    subSubProduct
                                  }
                                />
                              )
                            )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
