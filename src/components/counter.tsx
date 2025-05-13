import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prev) => prev + 1);
	}

	function decrement() {
		setCount((prev) => prev - 1);
	}

	return (
		<div>
			<h2 data-testid="counter">{count}</h2>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
}
