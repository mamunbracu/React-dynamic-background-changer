import logo from "./logo.svg";
import "./App.css";
import backgrounds from "./backgrounds";
import { useState } from "react";
function App() {
  const [background, setBackground] = useState('');

  const handleBackgroundChanges = (e) => {
    setBackground(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App-header">
      {
      background === "yeti-village" ? (
        <img src="yeti-village.jpg" alt="logo" />
      ) : background === "toboggan" ? (
        <img src="toboggan.jpg" alt="logo" />
      ) : background === "outer-space" ? (
        <video src="outer-space.mp4" autoPlay muted loop></video>
      ) : background === "superhero-yeti" ? (
        <video src="superhero-yeti.mp4" autoPlay muted loop></video>
      ) : background === "bunny-ears" ? (
        <video src="bunny-ears.mp4" autoPlay muted loop></video>
      ) : (
        <img src={logo} alt="logo" />
      )
    }

      <select name="select-bg" id="select-bg" onChange={handleBackgroundChanges}>
        <option value="" disabled selected hidden>
          Please select type to change background
        </option>
        {backgrounds.map((elem, index) => (
          <option key={index}  value={elem.name}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
