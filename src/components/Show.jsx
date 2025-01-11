import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Show.css'
import { IoArrowBackCircle } from "react-icons/io5";


const Show = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <h2>Card not found</h2>;
  }

  return (
    <>
    
     <Link to={'/'}>
     
    <IoArrowBackCircle className='back'/>
     </Link> 
    <div className='showw'>
      <div className="showleft">
        <img src={card.src} alt=""  style={{height:"400px"}}/>
        <h2>{card.model}</h2>
      <p>{card.seat}</p></div>
      <div className="showright">
   <form action="">
    <label htmlFor="">pickup location</label>
    <input type="text" name="" id=""  required/>



    <label htmlFor="">drop-off location</label>
    <input type="text" name="" id=""  required/>
    <label>Select Cab Type:</label>
        <select id="cabType" name="cabType">
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="luxury">Luxury</option>
        </select>


        <h1 className='fare'>total fare is </h1>

   </form>
      </div>

    </div>
 </> 
 
 );
};



export default Show;