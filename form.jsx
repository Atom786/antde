import React, { useState } from 'react';
import {Slider,Input,Switch } from 'antd'
const Form = (props)=>{
  const handleSwitch=(checked)=>{
    console.log(checked)
  }
  return(<>
  <form>
    <label>City Name: </label>
    <Input placeholder="City Name" />
    <label>Population:</label>
    <Slider min={0} max={30} defaultValue={3}></Slider>
   Active:  <Switch onChange={handleSwitch} />
  </form>
  <button onClick={()=>props.title()}>close</button>
  </>)
}

export default Form;
