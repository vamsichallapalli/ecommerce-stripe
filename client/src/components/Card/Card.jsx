
import React from 'react'
import { Link } from "react-router-dom";
import "./card.css"
const Card = ({ item }) => {
    return (
                <Link to = {`/product/${item.id}`} className = "link" >
                  <div className="card">
                    <div className="image">
                         {item?.attributes.isNew && <span className='new-season'>New Season</span>}
                        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt={item?.attributes?.img?.data?.attributes?.name} className='main-image'/>
                    </div>
                    <h1 className='title'>{item?.attributes.title}</h1>
                    <div className="prices">
                        <h3 className='oldPrice'>Rs {item.oldPrice || item?.attributes?.price + 40}</h3>
                        <h3 className='newPrice'>Rs {item?.attributes.price}</h3>
                    </div>
                  </div>
                </Link>
    )
}

export default Card
