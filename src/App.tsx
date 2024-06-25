import './App.css';
import PrimaryButton from './components/PrimaryButton';

function App() {
	return (
		<>
			<h1>Testing React</h1>
			<PrimaryButton />
			<PrimaryButton actionType='submit' />
		</>
	);
}

export default App;
