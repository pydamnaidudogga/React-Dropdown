import React from 'react'
import { useState } from 'react';

function Dropdown(props) {
  // The useState is used manage the height of the dropdown div
  const [height,setHeight] = useState('60px');
  
  //  the list varabile is used to store the array of iteams which are passed as props to this component
    const list = props.listIteams;
    // The count variable is maintaing the count of the list of items
      let count = 0;
      // the below function is used to display the list items
     const DisaplayListItems = list.map(
        (element) => {
          count=count+1;
          return (
                
            <h3 className="listItems" key={count}  >{element}</h3>
                   
          )
            
        }
    )

    // The below function is used to set the dropdown height to auto when the mouse is Over on the select button
    const mouseOver = ()=>{
      setHeight('auto');
    }
    // The below function is used to set the dropdown height to 60px when the mouse is mouseOut 
    const mouseOut = () =>{
      setHeight('60px');
    }
    
  return (
    
    <div >
      
      <div className="App">
        <div >
        <h4>Should you use a dropdown?</h4>
          <div  className="dropDown" onClick={mouseOut} onMouseOver={mouseOver} onMouseOut={mouseOut} style={{height:`${height}`}}>
            <h3  >select</h3>
            {DisaplayListItems}  
          </div>
         
        </div>  
      </div>

    </div>
  )
}

export default Dropdown
