import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./RandomGenerator.css"


export default function RandomGenerator() {
  const collection = {
    "alphabet": ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"],
    "telugu": ["అ ఆ ఔ", "ఉ వ ఊ ఒ ఓ", "ఋ ర", "క ఖ", "గ ఘ", "చ ఛ", "జ ఝ", "ణ న", "ట ఠ త థ", "డ ఢ ద ధ", "ప ఫ", "బ భ", "మ", "య ఇ ఈ ఎ", "ల ళ", "శ ష స", "హ"],
    "otherOption": []
  }
  const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const [selectedOption, setSelectedOption] = useState("alphabet");
  const [randomValue, setRandomValue] = useState("");
  const [isGenerated, setGenerated] = useState(-1);
  const [text, setText] = useState("");
  let counter = 0;
  const getRandomValue = () => {
    setGenerated(false);
    setTimeout(() => {
      setGenerated(true);
    }, 2000)
  }

  useEffect(() => {
    let intervalID;
    let otherOptionList = [];
    if (text != null)
      otherOptionList = text.split(',').map(val => val.trim());
    if (otherOptionList.length > 1)
      collection.otherOption = otherOptionList;
    else {
      //To-DO Handle Exception
    }
    if (isGenerated === -1) {
      setRandomValue("")
    }
    else if (isGenerated) {
      clearInterval(intervalID);
      var randInt = getRndInteger(0, collection[selectedOption].length);
      setRandomValue(collection[selectedOption][randInt]);
    }
    else {
      let intervalID = setInterval(() => {
        if (counter > collection[selectedOption].length - 1)
          counter = 0;
        setRandomValue(collection[selectedOption][counter++]);
      }, 100);
      return () => clearInterval(intervalID);
    }
  }, [isGenerated])


  return (
    <div className='RandomGenerator'>
      <nav>
        <Link to="/"><i className="fas fa-home"></i></Link>
      </nav>
      <div className='selectBoxContainer'>
        <label>Choose what to generate</label>
        <select defaultValue={selectedOption} id="randomSelect"
          onChange={(e) => { setRandomValue(""); setSelectedOption(e.target.value) }}>
          <option value="alphabet">Alphabet</option>
          <option value="telugu">Telugu</option>
          <option value="otherOption">new data</option>
        </select>
      </div>
      {selectedOption == "otherOption" && <div className="textBox">
        <label>Items</label>
        <textarea
          className='textArea'
          defaultValue={text}
          type="text"
          onBlur={(e) => setText(e.target.value)}
          placeholder="Add list items comma seperated"
        />
      </div>}
      <button className='Generate' onClick={() => { getRandomValue() }}>
        {randomValue && <div className={isGenerated ? "generatedText generated" : "generatedText"} >{randomValue}</div>}
        <div><i className="fas fa-sync"></i>{randomValue ? " Click To re-generate" : " Click To Generate"}</div>
      </button>
    </div>
  )
}
