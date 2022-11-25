import React from 'react'
import '../styles/Employee.css'

function Employee(props) {
  return (<>

   <header className='header'>
    <img src={props.icon} alt='Text' style={{width: 50, height: 50}}></img>
      СИСТЕМА УПРАВЛЕНИЯ АУЕ БАЛБЕСАМИ
      <div className='button-container' onClick={()=>alert("YOU ARE GAY")}>
        <button>Click Me</button>
      </div>
   </header>
   <div className='container'>
      <div>

      </div>
   </div>
  
  </>)
}

export default Employee
