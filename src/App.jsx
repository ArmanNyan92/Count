import React, { useState } from 'react'
import './App.css'
import { PiNumberZeroBold } from 'react-icons/pi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function App() {
	const [count, setCount] = useState(0)

	const handlePluse = () => {
		setCount(count + 1)
	}

	const handleMinuse =() => {
		setCount(count - 1)
	}
   return (
	<div>
		<div className="count">
			<h3 className={count === 10 || count === 0? 'text': 'plus-text'}>Count: {count}</h3>
		</div>
		<button className={count === 0? 'tadam-minus': 'minus'} disabled={count === 0} onClick={handleMinuse}><AiOutlineMinus/></button>
		<button className={count === 0? 'tadam-zero': 'zero'} disabled={count === 0} onClick={() => setCount(0)}><PiNumberZeroBold/></button>
		<button className={count === 10? 'tadam-plus': 'plus'} disabled={count === 10} onClick={handlePluse}><AiOutlinePlus/></button>
	</div>
  )
}
