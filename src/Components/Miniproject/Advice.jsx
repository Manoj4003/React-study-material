import { useState } from 'react';
import './Advice.css';

export default function Advice() {
  const [advice, setAdvice] = useState("Please click the button to get Advice");
  const [count,setCount]=useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count+1);
  }


  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have totaly get a advice count: {count}</p>
    </div>
  );
}
