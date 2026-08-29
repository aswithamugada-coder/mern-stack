import React from 'react'


const Card = (props) => {
  return (
    // <div className="card">
      /* <img src="https://tse4.mm.bing.net/th/id/OIP.0hcEYnfP5GyPXOxcZW8tpAHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/> */
      /* <h1>Bunty,21</h1> */
      /* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, doloremque.</p>       */
      /* <button>View Profile</button> */
    /* </div> */
<div className="card">
 <img></img>
 <h1>{props.user}, {props.age}</h1>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, doloremque.</p>       
 <button>View Profile</button>
 </div>

  )
}


export default Card

