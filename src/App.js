import Counter from './components/Counter'
import Count from './components/Count'
import BackButton from './components/BackButton'
import { useState } from 'react';

function App() {
  // create some count state that starts at 0
  // create a button that when clicked increments the count function
  // if the count state is >= 10, display completed component that simply has an h1 that says completed.
  // In the completed component, add a button that says back that resets the count state to 0 and displays the button.

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  if (count < 10) {
    return (
      <div className="App">
        <Count count={count} />
        <Counter add={add} minus={minus} />
      </div>
    );
  } else {
    return (
      <div className='App'>
        <h1>You reached 10</h1>
        <BackButton reset={reset} />
      </div>
    )
  }

}

export default App;
