import Image from 'next/image'

export default function Home() {

	const nome = 'Dimitri';
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div class="border-solid border-2 rounded-md border-black bg-white p-8 inline-block w-4/12 h-auto">
				<div class="text-center flex flex-col items-center">
					<h1 class="text-3xl font-bold">TIBIA SEARCH</h1>
					<input type="text" />
					<button>botao</button>
				</div>
			</div>
		</main>
	)
}
