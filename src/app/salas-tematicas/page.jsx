import { Card, CardHeader, Chip, Image, Link } from '@nextui-org/react'
import Container from '@/components/Container'
import Layout from '@/app/layout'

export default function SalasTematicasPage({ title }) {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
				<div className='grid grid-cols-12 grid-rows-2 gap-4'>
					<Card
						as={Link}
						href='/salas-tematicas/ciencias-computacion'
						className='col-span-12 md:col-span-6 lg:col-span-4 h-[300px]'>
						<CardHeader className='absolute z-10 top-1 flex-col !items-start gap-1'>
							<p className='text-tiny text-black/60 uppercase font-bold'>
								Salas Tematicas
							</p>
							<Chip color='primary'>Ciencias de la computación</Chip>
						</CardHeader>
						<Image
							removeWrapper
							alt='Card background'
							className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
							src='/images/banner-computacion.webp'
						/>
					</Card>
					<Card
						as={Link}
						href='/salas-tematicas/ingenieria-fisica'
						className='col-span-12 md:col-span-6 lg:col-span-4 h-[300px]'>
						<CardHeader className='absolute z-10 top-1 flex-col !items-start gap-1'>
							<p className='text-tiny text-white/60 uppercase font-bold'>
								Salas Tematicas
							</p>
							<Chip color='primary'>Ingenieria Física</Chip>
						</CardHeader>
						<Image
							removeWrapper
							alt='Card background'
							className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
							src='/images/banner-ing-fisica.webp'
						/>
					</Card>
					<Card
						as={Link}
						href='/salas-tematicas/fisica'
						className='col-span-12 md:col-span-6 lg:col-span-4 h-[300px]'>
						<CardHeader className='absolute z-10 top-1 flex-col !items-start gap-1'>
							<p className='text-tiny text-black/60 uppercase font-bold'>
								Salas Tematicas
							</p>
							<Chip color='primary'>Física</Chip>
						</CardHeader>
						<Image
							removeWrapper
							alt='Card background'
							className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
							src='/images/banner-fisica.webp'
						/>
					</Card>
					<Card
						as={Link}
						href='/salas-tematicas/matematica'
						className='w-full h-[300px] col-span-12 md:col-span-6 lg:col-span-7'>
						<CardHeader className='absolute z-10 top-1 flex-col items-start gap-1'>
							<p className='text-tiny text-black/60 uppercase font-bold'>
								Salas Tematicas
							</p>
							<Chip color='primary'>Matemática</Chip>
						</CardHeader>
						<Image
							removeWrapper
							alt='Card example background'
							className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
							src='/images/banner-matematica.webp'
						/>
					</Card>
					<Card
						as={Link}
						href='/salas-tematicas/quimica'
						className='w-full h-[300px] col-span-12 md:col-span-12 lg:col-span-5'>
						<CardHeader className='absolute z-10 top-1 flex-col items-start gap-1'>
							<p className='text-tiny text-black/60 uppercase font-bold'>
								Salas Tematicas
							</p>
							<Chip color='primary'>Química</Chip>
						</CardHeader>
						<Image
							removeWrapper
							alt='Relaxing app background'
							className='z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
							src='/images/banner-quimica.webp'
						/>
					</Card>
				</div>
			</Container>
		</Layout>
	)
}
