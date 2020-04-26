import React from 'react';

const userInput=(props)=>{
return (
    <div>
        <p>{props.userInput}</p>
      <input type='text' onChange={props.change} value={props.userInput}>
          
          </input>  
    </div>
)
}





export default userInput


