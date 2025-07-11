import React, {useState} from 'react'
import Greetings from './Greetings' ;
import Border from './Border' ;
import Welcome from './Welcome' ;


const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <Border>
        <Greetings name={name} />
      </Border>
      <Welcome onNameChange={handleNameChange} />
    </div>
  );
}

export default App;


