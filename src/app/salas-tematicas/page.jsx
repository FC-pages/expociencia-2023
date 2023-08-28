import { Card, CardHeader, Chip, Image, Link } from '@nextui-org/react'
import Layout from '@/app/layout'
import { Container, Title } from '@/components/core'

const salas_tematicas = [
	{
		title: 'Ciencias de la computación',
		image: '/images/banner-computacion.webp',
		href: '/salas-tematicas/ciencias-computacion',
		width: 'col-span-12 md:col-span-6 lg:col-span-4'
	},
	{
		title: 'Ingenieria Física',
		image: '/images/banner-ing-fisica.webp',
		href: '/salas-tematicas/ingenieria-fisica',
		width: 'col-span-12 md:col-span-6 lg:col-span-4'
	},
	{
		title: 'Física',
		image: '/images/banner-fisica.webp',
		href: '/salas-tematicas/fisica',
		width: 'col-span-12 md:col-span-6 lg:col-span-4'
	},
	{
		title: 'Matemática',
		image: '/images/banner-matematica.webp',
		href: '/salas-tematicas/matematica',
		width: 'col-span-12 md:col-span-6 lg:col-span-7'
	},
	{
		title: 'Química',
		image: '/images/banner-quimica.webp',
		href: '/salas-tematicas/quimica',
		width: 'col-span-12 md:col-span-12 lg:col-span-5'
	}
]

export default function SalasTematicasPage({ title }) {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-8 gap-6'>
				<Title className='mb-2'>{title}</Title>
				<div className='grid grid-cols-12 grid-rows-2 gap-4'>
					{salas_tematicas.map((sala, index) => (
						<Card
							key={index}
							as={Link}
							href={sala.href}
							className={['h-[300px]', sala.width].join(' ')}>
							<CardHeader className='absolute z-10 top-1 flex-col !items-start gap-1'>
								<Chip color='primary'>{sala.title}</Chip>
							</CardHeader>
							<Image
								removeWrapper
								alt='Card background'
								className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
								src={sala.image}
							/>
						</Card>
					))}
				</div>
			</Container>
		</Layout>
	)
}
