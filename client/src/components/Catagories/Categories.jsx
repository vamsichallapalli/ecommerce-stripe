import React from 'react'
import './Catagories.css'
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className='categories'>
      <div className="column">
        <div className="row">
        <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
           <button>
            <Link className="link" to="/products/7">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
        <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/4">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="column">
        <div className="row">
        <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/8">
              New season
            </Link>
          </button>
        </div>
      </div>
      <div className="column column-l">
        <div className="row">
          <div className="column">
            <div className="row">
            <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
            <Link className="link" to="/products/5">
              men
            </Link>
          </button>
            </div>
          </div>
          <div className="column">
            <div className="row">
            <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
            <Link className="link" to="/products/9">
              accessories
            </Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/10">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
