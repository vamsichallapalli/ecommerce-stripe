import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import "./model.css"
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
const style = {
    position: 'absolute',
    top: '72%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    boxShadow: 24,
    
  };
const Model = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return ( 
  
    <>
        <div className='model-main-contaner' onClick={handleOpen}>
          <TuneIcon/>
          <span>sort</span>
          <span className='vl'></span>
          <span>filter</span>
        </div>
      
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box variant = "div" bgcolor="white" sx={style}>
            <div className="crossZone">
                <span>Filter By</span>
                <CloseIcon onClick={handleClose}/>
            </div>
            <div className="sortType">
                <h4>product category</h4>
                <div className="choosingSort">
                    <input type="checkbox" id ="1" />
                    <label htmlFor="1">Shoes</label>
                </div>
                <div className="choosingSort">
                    <input type="checkbox" id ="2" />
                    <label htmlFor="2">Shirts</label>
                </div>
            </div>
            <div className="sortType">
                <h4>Filter by price</h4>
                <span>0</span>
                <input type="range" min={0}  max = {3000}/>
                <span>3000</span>
            </div>
            <div className="sortType">
                <h4>price</h4>
                <button className='LH'>Low to High</button>
                <button> High to Low</button>
            </div>
            <div className="clearAndClose">
                <button className='clear'>Clear All</button>
                <button className='done' onClick={handleClose}>Done</button>
            </div>
        </Box>
      </Modal>
    </>
  )
}

export default Model
