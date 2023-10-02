function App() {
	const { data, loading } = useFetch(
		"https://jsonplaceholder.typicode.com/users?limit=200",
	);

	return (
		<main className="h-screen bg-zinc-950 flex flex-col gap-5 items-center">
			<h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
				PRUEBA TÉCNICA KAYSER 2023
			</h1>
			<div className="w-full flex flex-col gap-5 flex-1 p-5 bg-zinc-950 items-center justify-center">
				{/* Crear un titulo indicando la cantidad de usuarios */}
				{/* Ejemplo: Lista de Usuarios: 10 */}

				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-wrap gap-5 justify-around">
						{data.map((u) => (
							<div
								className="w-full rounded-lg bg-gradient-to-t from-primary-400 to-primary-800 md:w-1/3 lg:w-1/4 xl:w-1/6 group hover:cursor-pointer hover:bg-primary-100 hover:text-white hover:shadow-lg"
								key={u.id}
							>
								<UserCard {...u} />
							</div>
						))}
					</div>
				)}

			</div>
		</main>
	);
}

export default App;
