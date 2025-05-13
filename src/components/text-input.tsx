type TextInputProps = {
	inputValue: string;
	handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
	inputValue,
	handleChange,
}: TextInputProps) {
	return <input type="text" value={inputValue} onChange={handleChange} />;
}
