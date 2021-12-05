import {useState} from 'react';

export function Picker(props) {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [name, setName] = useState('');
    const {add} = props;

    const hex = '#'
      + red.toString(16).padStart(2, '0')
      + green.toString(16).padStart(2, '0')
      + blue.toString(16).padStart(2, '0');
    
    const style = {
      backgroundColor: hex,
    };
    
    return (
        <div id="picker" className="swatch" style={style}>
      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={event => setRed(parseInt(event.target.value))}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={event => setGreen(parseInt(event.target.value))}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={event => setBlue(parseInt(event.target.value))}
      />
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
        <button onClick={() => add({hex, name})}>Add</button>
    </div>
    );
  }