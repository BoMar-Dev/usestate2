Your site is live at https://bomar-dev.github.io/usestate2/

Learning react useState 

alternative : 

const UseStateObject = () => {

  const [human, setHuman] = useState({
    name: 'Marcus',
    age: 35,
    hobby: "skiing"

  })


  const displayPerson = () =>{  
   setHuman({name:'Tove', age: '29', hobby:'Crossfit'})
  
    // setHuman({...human, name:'Åke'}) så kommer "Tove" att skrivas över till Åke
  }

  
  const {name,age,hobby} = human

  return (
    <div>
      <h2> Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Hobby: {hobby}</h4>
      <button className='btn' onClick={displayPerson}>Show TOVE</button>
    </div>
  )
};

export default UseStateObject;
