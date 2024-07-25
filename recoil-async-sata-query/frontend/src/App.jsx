import { useState } from 'react'
import { allAtoms } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {

  
  // console.log("error in allAtomsCount", allAtomsCount);
  return (
    <RecoilRoot>
      <Buttons />
    </RecoilRoot>
  )
}

function Buttons() {
  const allAtomsCount = useRecoilValue(allAtoms);
  return (
    <>
      <button>{allAtomsCount[0]}</button>
      <button>{allAtomsCount[1]}</button>
      <button>{allAtomsCount[2]}</button>
      <button>{allAtomsCount[3]}</button>
      <button>{allAtomsCount[4]}</button>
    </>
  )
}

export default App
