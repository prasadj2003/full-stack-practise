import { useContext, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  

  // wrap anyone who wants to use the teleported value inside a provider

  return (
    <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </div>
  );
}


function Count() {
  console.log("count re-rendered");
  return <div>
    <CountRendered />
    <Buttons />
  </div>
}

function CountRendered() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>
      Increase
    </button>
    <button onClick={() => {
      setCount(count => count-1)
    }}>
      Decrease
    </button>
  </div>
}

export default App;
