import './App.css';
import { Swatch } from './Swatch';
import {useState} from 'react';
import {Picker} from './Picker';


const initialColors = [
  {hex: '#FF0000', name: 'red'},
  {hex: '#FF9900', name: 'pumpkin'},
  {hex: '#6495ED', name: 'cornflower'},
  {hex: '#008080', name: 'teal'},
  {hex: '#CD853F', name: 'peru'},
  {hex: '#FFF00F', name: 'yellow'},
];

function App() {
  const [colors, setColors] = useState(initialColors);

  const removeColor = name => {
    setColors(colors.filter(color => color.name !== name));
  };

  const addColor = newColor => {
    setColors([newColor, ...colors]);
  };

  return (
    <div className="App">
      <Picker add={addColor} /> 
      {
      colors.map(color =>
        <Swatch
            key={color.name}
            name={color.name}
            hex={color.hex}
            remove={removeColor}
          />
          
        )
      }
      
    </div>
  );
}

export default App;
