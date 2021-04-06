import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds'
import { useState} from 'react';
import jpg1 from './img/toboggan.jpg'
import jpg2 from './img/yeti-village.jpg'
import bunny from './img/bunny-ears.mp4'
import outer from './img/outer-space.mp4'
import super_hero from './img/superhero-yeti.mp4'
function App() {
  const background = backgrounds
  // console.log(background);
  const [ar, setArray] = useState(logo)
  
 const changes = (e) => {
    setArray(e.target.value);
    console.log(e.target.value);
    // let values = (e.target.value === 'yeti-village' ? <img src={jpg1} alt="logo" /> : "")
      
    
 }

  
  return (
    <div className="">

    {/* <div className="App-header">
      <img src={logo} alt="logo" />
      <select name="select-bg" id="select-bg"></select>
    </div> */}
    <div className="App-header">
     
     {
       ar === 'yeti-village' ? <img src={jpg2} alt="logo" /> : ar === 'toboggan' ? <img src={jpg1} alt="logo" /> : ar === 'outer-space' ? <video src={outer} autoPlay muted loop ></video> : ar === 'superhero-yeti' ? <video src={super_hero} autoPlay muted loop ></video> : ar === 'bunny-ears' ? <video src={bunny} autoPlay muted loop ></video> : <img src={logo} alt="logo" />
     }

        <select name="select-bg" id="select-bg" onChange={changes}>
        <option value="" disabled selected hidden>
           Please select type to change background
          </option>
        {background.map((item, i) => (
          <option key={i} id={i} value={item.name}>{item.name}</option>))}
          
        </select> 
      
      
    </div>
    </div>
  );
}

export default App;
