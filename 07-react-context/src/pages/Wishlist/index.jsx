import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../context'


const Wishlist = () => {
  const {favorites,products , toogleFavorites , clearFavorites} = useContext(FavoritesContext)
  console.log(favorites);
  return (
    <div className="container">
    <div className="cards">
      <div className="row">
       
         {
            favorites && favorites.slice(0,8).map((p)=>{
              return(
                <div key={p.id}  className="col-12 col-md-6 col-xl-4">
                <div className="card" style={{ width: "18rem", height:"35rem" ,margin: "4rem 0" }}>
                <img src={p.images[1]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">
                   {p.description.slice(0,100)}
                  </p>
                  <button onClick={()=>clearFavorites(p)} className="btn btn-primary">Remove Wishlist</button>
                </div>
              </div>
              </div>
              )
            })
         }
        
      </div>
    </div>
  </div>
  )
}

export default Wishlist