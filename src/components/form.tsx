import { useState } from 'react';
import TextInput from './text-input';

export default function Form() {
	const [inputValue, setInputValue] = useState('');

	function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(ev.target.value);
	}

	return (
		<form>
			<TextInput inputValue={inputValue} handleChange={handleChange} />
		</form>
	);
}
