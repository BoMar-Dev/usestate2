import { useState } from 'react';

const UseStateObject = () => {

  const [name, setname] = useState("Marcus")
  const [age, setAge] = useState(35)
  const [hobby, setHobby] = useState("Skiing")

  const displayPerson = () =>{  
    setname('Tove')
    setAge(29)
    setHobby('Crossfit')

  }
  

  return (
    <div className='component'>
      <h1>Learning useState</h1>
      <h2> Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Hobby: {hobby}</h4>
      <button className='btn' onClick={displayPerson}>Show TOVE</button>
    </div>
  )
};

export default UseStateObject;
