import './styles/main.css';
import logoImg from './assets/logo.svg';

export default function App() {
	return (
		<div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
			<img src={logoImg} alt="logo" />
			<h1 className="text-6xl text-white font-black mt-20">
				Seu duo está aqui
			</h1>
		</div>
	);
}
