import React, { useEffect, useState } from 'react'
import './css/style.css';

const Temapp = () => {


  const [city,setCity] = useState(null);
  const [search, setSearch] = useState("Lucknow");

  useEffect(()=>{
    const fetchApi = async () => {
      const url  =(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0a9aaf50e0895f923f437f6b148cd0f`)
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
      
      

    };
    fetchApi();
  },[search])
  return (
    <div className='box d-flex flex-column justify-content-center'>
       
        <div className='inputData'>
        <input type="search"  className='inputFeild' onChange={(event)=>{setSearch(event.target.value)}}/>

        </div>

        {!city ? (
          <h1 className='errorMsg '>No data Found</h1>
        ) :(
        <div className=''>
          <div className='info'> 
          
          <i class="bi bi-clouds-fill icon"></i>
          <h2 className='Location ml-4 loc'>{search}</h2>
          <h2 className='temp text-center headingtwo '>
          {city.temp}°C
          </h2>
          <h3 className='tempmin_max heading'>Min : {city.temp_min}°C || Max : {city.temp_max}°C </h3>
       </div>
       {/* <div className='wave'></div>
       <div className='wave-one'></div>
       <div className='wave-two'></div>
       <div className='wave-three'></div> */}
       </div>
        )}

     
    </div>   
  )
}

export default Temapp      
