import ImageGallery from 'react-image-gallery'
import { Button } from '@nextui-org/react'
import Layout from '@/app/layout'
import { Container } from '@/components/core'

const images = [
	{
		original: '/images/carousel-1.webp',
		thumbnail: '/thumbnails/carousel-1.thumbnail.webp'
	},
	{
		original: '/images/carousel-2.webp',
		thumbnail: '/thumbnails/carousel-2.thumbnail.webp'
	},
	{
		original: '/images/carousel-3.webp',
		thumbnail: '/thumbnails/carousel-3.thumbnail.webp'
	},
	{
		original: '/images/carousel-4.webp',
		thumbnail: '/thumbnails/carousel-4.thumbnail.webp'
	},
	{
		original: '/images/carousel-5.webp',
		thumbnail: '/thumbnails/carousel-5.thumbnail.webp'
	},
	{
		original: '/images/carousel-6.webp',
		thumbnail: '/thumbnails/carousel-6.thumbnail.webp'
	},
	{
		original: '/images/carousel-7.webp',
		thumbnail: '/thumbnails/carousel-7.thumbnail.webp'
	},
	{
		original: '/images/carousel-8.webp',
		thumbnail: '/thumbnails/carousel-8.thumbnail.webp'
	},
	{
		original: '/images/carousel-9.webp',
		thumbnail: '/thumbnails/carousel-9.thumbnail.webp'
	},
	{
		original: '/images/carousel-10.webp',
		thumbnail: '/thumbnails/carousel-10.thumbnail.webp'
	},
	{
		original: '/images/carousel-11.webp',
		thumbnail: '/thumbnails/carousel-11.thumbnail.webp'
	}
]

export default function InicioPage({ title }) {
	const redirectToForm = () => {
		// Redirige a una página web externa
		window.open('https://forms.office.com/r/QrfKp3Z5kp?origin=lprLink', '_blank')
	}

	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-12 px-2 gap-16 lg:gap-20'>
				<h1 className='text-xl font-medium text-center'>
					La Facultad de Ciencias de la Universidad Nacional de Ingeniería les invita a su
					<br />
					<p className='text-primary font-extrabold text-3xl text-center mt-4'>
						FERIA DE DIVULGACION CIENTIFICA
					</p>
				</h1>
				<div className='flex flex-col items-center lg:flex-row gap-12'>
					<img
						src='/images/facultad.webp'
						alt='facultad'
						className='rounded-lg shadow-lg shadow-slate-400'
						width={500}
					/>
					<p className='text-justify font-base'>
						Expociencia tiene como objetivo mostrar cómo el conocimiento científico
						ayuda a comprender eventos cotidianos de manera divertida. La exposición
						contará con experimentos dirigidos por profesores y realizados por
						estudiantes en cinco salas temáticas: Física, Matemáticas, Química,
						Ingeniería Física y Ciencia de la Computación. Está dirigida a estudiantes
						de 4to. y 5to. año de secundaria, brindándoles la oportunidad de participar
						y disfrutar directamente de los experimentos. ¡Te esperamos!
					</p>
				</div>
				<div className='flex flex-col w-full gap-12'>
					<h1 className='text-left font-extrabold text-primary text-3xl'>
						INSCRIPCIONES
					</h1>
					<p className='text-justify'>
						Expociencia 2023 se llevará a cabo en la Facultad de Ciencias de la
						Universidad Nacional de Ingeniería, en la ciudad de Lima, los días 15, 16 y
						17 de noviembre en los horarios de 9 a 12 pm y de 1:30 a 4:30 pm. La
						pre-inscripción puede ser realizada llenando el formulario:
						<a
							href='https://forms.office.com/r/QrfKp3Z5kp?origin=lprLink'
							target='_blank'
							className=' text-primary font-bold '
							rel='noreferrer'>
							{' '}
							https://forms.office.com/r/QrfKp3Z5kp?origin=lprLink.{' '}
						</a>
						Para mayor información puede escribir al correo electrónico
						<a
							href='mailto:expocienciafc@uni.edu.pe'
							className=' text-primary font-bold '>
							{' '}
							expocienciafc@uni.edu.pe
						</a>{' '}
						o llamar al teléfono 4811070 (anexo 5008), desde el 4 de octubre hasta el 5
						de noviembre.
					</p>
					<p>
						Las instituciones pre-inscritas serán contactadas para coordinar su visita y
						brindarles indicaciones adicionales
					</p>
					<div className='flex justify-center'>
						<Button color='primary' className='w-fit text-lg' onClick={redirectToForm}>
							Inscríbite aquí
						</Button>
					</div>
				</div>
				<ImageGallery
					items={images}
					autoPlay={true}
					showBullets={true}
					showFullscreenButton={false}
					showPlayButton={false}
					showNav={false}
					showThumbnails={true}
					lazyLoad={true}
				/>
			</Container>
		</Layout>
	)
}
