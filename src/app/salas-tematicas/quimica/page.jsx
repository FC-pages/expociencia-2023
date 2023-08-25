import Container from '@/components/Container'
import Layout from '@/app/layout'

const title = 'Química'

export default function QuimicaPage() {
	const pro_quimica = ["Proyecto 1","Proyecto 2", "Proyecto 3",
						"Proyecto 4", "Proyecto 5", "Proyecto 6",
						"Proyecto 7", "Proyecto 8", "Proyecto 9",
						"Proyecto 10", "Proyecto 11", "Proyecto 12",
						"Proyecto 13", "Proyecto 14", "Proyecto 15"]
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<div className='flex items-center w-auto h-50'>
					<h1 className='flex text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
					<img src='/images/icon-quimica.webp' alt='Quimica' className='rounded-lg w-40 h-36 mx-8 border-none' />
				</div>
				<h2 className='text-1xl font-bold mb-2 text-justify'>La Química es una disciplina científica que se
														dedica al estudio de la materia, sus propiedades,
														composición, estructura y cambios que experimenta
														a nivel molecular y atómico. Esta ciencia abarca
														una amplia gama de áreas y subcampos, y su objetivo
														es comprender cómo interactúan y se transforman los
														átomos y las moléculas en diferentes condiciones.</h2>

			</Container>
			<div className='flex flex-col items-center py-6 gap-6 bg-blue-100'>
				<div className='flex w-1/2 h-50'>
					<p className='text-3xl w-fit font-extrabold text-primary uppercase '>Relación de experimentos:</p>
				</div>
				<div >
					<ul className='grid grid-cols-3 list-disc'>
						
						{pro_quimica.map((item, index) => (
							<li key={index} className='flex flex-row'>
								<li className='mx-40 my-4'>{item}</li>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	)
}
//git add .
//git commit -m "mensaje"
//git push origin feature/sala-quimica