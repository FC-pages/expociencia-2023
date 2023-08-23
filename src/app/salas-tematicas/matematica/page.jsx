import Container from '@/components/Container'
import Layout from '@/app/layout'

const title = 'Matemática'

const experiment = [
	'Experimento 1 Nombre muy largo para ver como se comporta',
	'Experimento 2 Nombre muy largo para ver como se comporta',
	'Experimento 3 Nombre muy largo para ver como se comporta',
	'Experimento 4 Nombre muy largo para ver como se comporta',
	'Experimento 5 Nombre muy largo para ver como se comporta',
	'Experimento 6 Nombre muy largo para ver como se comporta',
	'Experimento 7 Nombre muy largo para ver como se comporta',
	'Experimento 8 Nombre muy largo para ver como se comporta',
	'Experimento 9 Nombre muy largo para ver como se comporta',
	'Experimento 10 Nombre muy largo para ver como se comporta'
]

export default function MatematicaPage() {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<section className='flex flex-col items-center w-full gap-4' >
					<h1 className='text-4xl font-bold mb-2 w-fit border-b-4 border-primary'>
						Área temática de {title}
					</h1>
					<div className='flex flex-row'>
						<p>
							La disciplina de las matemáticas se destaca como una herramienta
							científica fundamental para abordar una amplia gama de problemas a
							través de modelado y predicción. Aprovechando diversas herramientas
							matemáticas, las matemáticas tienen la capacidad de potenciar,
							dimensionar, controlar y anticipar información mediante la aplicación de
							modelos probabilísticos y estocásticos. Su valiosa contribución radica
							en abordar desafíos de gran envergadura, ofreciendo formulaciones y
							soluciones para problemas complejos. Además, las matemáticas desempeñan
							un papel crucial al emplear simulaciones numéricas para resolver de
							manera precisa y eficaz modelos planteados. Este enfoque resulta
							particularmente útil en la formulación y resolución numérica de
							situaciones problemáticas.
						</p>
						<picture className='w-full h-full'>
							<img src='/images/icon-matematica.webp' alt='icono de matemática' />
						</picture>
					</div>
				</section>
				<section className='flex flex-col items-center w-full gap-4'>
					<h1 className='text-4xl font-bold mb-2 w-fit border-b-4 border-primary'>
						Lista de experimentos
					</h1>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start gap-4 w-full'>
						{experiment.map((item, index) => (
							<li
								key={index}
								className='flex flex-row'>
								<h2 className='text-lg font-medium mb-2'>{item}</h2>
							</li>
						))}
					</ul>
				</section>
			</Container>
		</Layout>
	)
}
