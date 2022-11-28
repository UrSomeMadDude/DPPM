import React from 'react'
import '../styles/Employee.css'

function Employee(props) {

  return (<>

   <header className='header'>
      <div className='image-container'>
        <a href='https://www.youtube.com/watch?v=ql9TiOhGx0s'>
            <img src={props.icon} alt='Text' style={{width: 50, height: 50, borderRadius: 10}}></img>
        </a>
      </div>
      СИСТЕМА УПРАВЛЕНИЯ "ЛИЧНЫЙ КАБИНЕТ"
      <div className='button-burger' onClick={()=>alert("burger")}>
          <div className='button-line'></div>
          <div className='button-line'></div>
          <div className='button-line'></div>
      </div>
   </header>
   <div className='content'>
        <div className='profile'>
            <div className='profile-photo'>
                <img src={props.profilePhoto} alt="Text" style={{width: '100%', height: '100%'}}></img>
            </div>
                <div className='profile-data'>
                        <div className='profile-data-segment'>
                            Иванов Иван Иванович
                        </div>
                        <div className='underline'></div>
                        <div className='profile-data-segment'>
                            Работник завода
                        </div>
                        <div className='underline'></div>
                        <div className='profile-data-segment'>
                            Новокузнецкий металлургический завод
                        </div>
                        <div className='underline'></div>
                        <div className='profile-button' onClick={()=>{}}>
                            Должностная инструкция
                        </div> 
                        <div className='profile-button' onClick={()=>{}}>
                            Рабочий состав
                        </div> 
                </div>
            <div className='sweets'>
                <div> Количество пряников: {props.sweets} </div>
                <div className='underline-sweets'></div>
                <div className='profile-button'>Потратить пряники</div>
            </div>
        </div>

        <div className='to-do-list'>
            <div className='to-do-today'>

            </div>
            <div className='to-do-month'>

            </div>
        </div>

   </div>
  
  </>)
}

export default Employee
