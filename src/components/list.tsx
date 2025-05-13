export default function List() {
	const animals = ['cat', 'whale', 'lion', 'elephant', 'rhino'];

	return (
		<div>
			<ul className="animals">
				{animals.map((animal, index) => (
					<li key={index}>{animal}</li>
				))}
			</ul>
		</div>
	);
}
