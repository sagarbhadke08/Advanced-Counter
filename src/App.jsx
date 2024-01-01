import { useState } from 'react';
import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';


const [chosenCount, setChosenCount] = useState(0);

function handleSetCount(newCount){
  setChosenCount(newCount);
}

function App() {
  log('<App /> rendered');

  
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
