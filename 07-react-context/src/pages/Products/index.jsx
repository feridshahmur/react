import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import controller from "../../services";
import { Button, Card, Col, Row } from 'antd';
import { FaHeart } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from "../../context/index";

const Products = () => {
  const [products , setProducts] = useState([])
  const { toggleFavorites, favorites } = useContext(FavoritesContext)


  const getProducts = async()=>{
    try {
      const prod = await controller.getAllData()
      console.log(prod);
      setProducts(prod)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    
  getProducts()
    
  }, [])
  
  return (
    <div className="container">
      <div className="cards">
        <div className="row">
         
           {
              products && products.slice(0,8).map((p)=>{
                return(
                  <div key={p.id}  className="col-12 col-md-6 col-xl-4">
                  <div className="card" style={{ width: "18rem", height:"35rem" ,margin: "4rem 0" }}>
                  <img src={p.images[1]} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <Button  onClick={() => toggleFavorites(p)}>
                 {favorites.find((q) => q.id === p.id) ? <FaHeart/> : <FaRegHeart />}
              </Button>
                  </div>
                </div>
                </div>
                )
              })
           }
          
        </div>
      </div>
    </div>
  );
};

export default Products;
