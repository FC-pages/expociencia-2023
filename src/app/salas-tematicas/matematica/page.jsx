import Container from '@/components/Container'
import Layout from '@/app/layout'

const title = 'Matemática'

const project = [
	'Proyecto 1 ...',
	'Proyecto 2 ...',
	'Proyecto 3 ...',
	'Proyecto 4 ...',
	'Proyecto 5 ...',
	'Proyecto 6 ...',
	'Proyecto 7 ...',
	'Proyecto 8 ...',
	'Proyecto 9 ...'
]

export default function MatematicaPage() {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<section className='flex flex-col w-full gap-4'>
					<h1 className='text-3xl w-fit font-extrabold text-primary uppercase'>
						Área temática de {title}
					</h1>
					<div className='flex flex-row gap-4'>
						<p className='text-justify'>
							La matemática como disciplina científica permite resolver diversos
							problemas modelando y prediciendo sus comportamientos, para lo cual hace
							uso de las herramientas matemáticas. Su capacidad científica adquirida
							le permite potenciar, dimensionar, controlar y predecir la información
							mediante modelos probabilísticos y estocásticos. Su labor profesional
							incluye formular y dar soluciones a problemas de gran escala; asimismo,
							es el indicado para formular y dar solución numérica mediante
							simulaciones a modelos que se plantean.
						</p>
						<picture>
							<img src='/images/icon-matematica.webp' alt='icono de matemática' className='w-full h-full'/>
						</picture>
					</div>
				</section>
				<section className='flex flex-col w-full gap-4'>
					<h1 className='text-3xl w-fit font-extrabold text-primary uppercase'>
						Lista de proyectos
					</h1>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start gap-4 w-full'>
						{project.map((item, index) => (
							<li key={index} className='flex flex-row'>
								<h2 className='text-lg font-medium mb-2'>{item}</h2>
							</li>
						))}
					</ul>
				</section>
			</Container>
		</Layout>
	)
}
