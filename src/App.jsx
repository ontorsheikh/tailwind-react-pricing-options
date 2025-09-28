

import { Suspense } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav/Nav'

import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './Components/MarksChart/MarksChart';


const pricingPromise = fetch('pricingData.json').then(res=>res.json());

 const marksPromise = axios.get('marksData.json');                 

function App() {
  

  return (
    <>
   <div className='bg-black'>
    <header className='text-white'>
       
    <Nav></Nav>
    {/* <Navbar></Navbar> */}
   </header>
   <main>
    <Suspense  fallback={<h3 className='text bold text-blue-700'>Pricing Loading.....wait</h3>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>

    <Suspense>
      <MarksChart marksPromise={marksPromise} fallback={<h3 className='text bold text-blue-700' >Marks Loading.....wait</h3>}></MarksChart>
    </Suspense>
    <ResultChart></ResultChart>
   </main>
   </div>

    </>
  )
}

export default App
