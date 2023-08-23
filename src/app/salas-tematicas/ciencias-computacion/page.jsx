import Container from '@/components/Container'
import Layout from '@/app/layout'

const title = 'Ciencias de la Computación'

export default function CienciasComputacionPage() {
	return (
		<Layout title={title}>
			<Container className='flex flex-row items-center justify-center py-6 gap-6'>
				<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
				<img src='/images/icon-computacion.webp' alt='Logo' className='w-40 h-36' />
			</Container>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<p className='text-2xl  text-justify mb-2 border-primary'>
					La ciencia de la computación es una disciplina contemporánea orientada a
					solucionar porblemas en el campo de la computación, tanto a nivel de hardware
					como de software, para contribuir en la investigación y las innovaciones
					computacionales que requieren de las instituciones, empresas y el gobierno.{' '}
				</p>
			</Container>
			<div className='flex flex-col w-full'>
				{/* Change background color all width */}
				<div className='bg-red-100 h-96'>
					{/* Listar nombres en 3 columnas */}
					<Container className='grid grid-cols-3 py-6 gap-4 justify-items-start'>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
						<div>&#9632; ------</div>
					</Container>
				</div>
			</div>
		</Layout>
	)
}
