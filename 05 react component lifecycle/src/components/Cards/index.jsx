import React from 'react'
import './index.css'
const Cards = ({ recepts, setrecepts }) => {


  return (
    <div className='container'>
     
      {
        recepts && recepts.map((r) => {
          return (
            
              <div key={r.id} className="card col-12 col-md-6 col-lg-3" >
                <img src={r.image} className="card-img-top" alt="..." width={200} />
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <p className="card-text">
                    {r.ingredients}
                  </p>
                  <p className="card-text">
                    {r.instructions}
                  </p>
                  <p className='card-text'>Prep TimeMinutes is {r.prepTimeMinutes}</p>
                  <p className='card-text'>This meal's cooked is  {r.difficulty}</p>
                  <p className='card-text'>This meal's calory is  {r.caloriesPerServing} kCal</p>

                </div>

              </div>
           

          )
        })
      }
      

    </div>
  )
}

export default Cards