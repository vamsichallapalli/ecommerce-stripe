import React, { useState } from 'react'
import "./Slider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Slider = () => {
    const [transform,setTransform] = useState(0)
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
      const onBackward = () =>{
        setTransform(transform === 0?(pre)=>200:(pre) => pre - 100)
      }
      const onForward = () =>{
        setTransform(transform === 200?(pre)=>0:(pre) => pre + 100)
      }
  return (
    <div className='slider'>
          <div className="container" style={{transform:`translateX(-${transform}vw)`}}>
            {data.map((ci,index)=>{
                return(
                    <img src={ci} alt={`pic${index}`} key={index} />
                )
            })}
          </div>
          <div className="icons">
            <div className="backward" onClick={onBackward}>
               <ArrowBackIosIcon sx = {{fontSize:"70px",fill:"grey"}}/>
            </div>
            <div className="forward" onClick={onForward}>
               <ArrowForwardIosIcon  sx = {{fontSize:"70px",fill:"grey"}}/>   
            </div>
          </div>
    </div>
  )
}

export default Slider