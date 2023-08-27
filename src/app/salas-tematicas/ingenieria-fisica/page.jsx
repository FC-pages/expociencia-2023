import Container from '@/components/Container'
import Layout from '@/app/layout'

export default function IngenieriaFisicaPage({ title }) {
	const proyectos = [
		'Proyecto 1',
		'Proyecto 2',
		'Proyecto 3',
		'Proyecto 4',
		'Proyecto 5',
		'Proyecto 6',
		'Proyecto 7',
		'Proyecto 8',
		'Proyecto 9',
		'Proyecto 10',
		'Proyecto 11',
		'Proyecto 12',
		'Proyecto 13',
		'Proyecto 14',
		'Proyecto 15'
	]

	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<div className='flex items-center w-auto h-50'>
					<h1 className='flex text-4xl font-bold mb-2 border-b-4 border-primary'>
						{title}
					</h1>
					<img
						src='/images/icon-ing-fisica.webp'
						alt='Ingenieria Física'
						className='rounded-lg w-40 h-36 mx-8 border-none'
					/>
				</div>
				<h2 className='text-1xl font-bold mb-2'>
					La Ingeniería Física es una disciplica enfocada en abordar con solvencia las
					aplicaciones tecnológicas modernas, para lo cual se sustenta en una sólida
					formación en Física Experimental y una visión integradora de la Química, la
					Física y la Matemática. Los campos de su competencia se orientan al uso y manejo
					de instrumentos de alta tecnología, la energía no convencional, la Física Médica
					y la Ciencia de los Materiales.
				</h2>
			</Container>
			<div className='flex flex-col items-center py-6 gap-6 bg-orange-100'>
				<div className='flex w-1/2 h-50'>
					<p className='font-serif text-3xl text-[#5c3088]'>Relación de experimentos:</p>
				</div>
				<div>
					<ul className='grid grid-cols-3 list-disc'>
						{proyectos.map((proyecto, index) => (
							<li className='mx-40 my-4' key={index}>{proyecto}</li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	)
}
