import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css';
import DetailPage from './DetailPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      <DetailPage/>
    </div>
    </>
  )
}

export default App
