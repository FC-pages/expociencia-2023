import Container from '@/components/Container'
import ImageGallery from 'react-image-gallery'
import Layout from '@/app/layout'
import { Button } from '@nextui-org/react'
const title = 'Inicio'

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

export default function InicioPage() {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-12 gap-16 lg:gap-20'>
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
						La inscripción puede ser realizada vía web, llenando el formulario de
						inscripción, o en la misma Unidad de Responsabilidad Social de la Facultad
						(Sector R - 2do. piso, ingreso por la puerta No. 5, teléfono 4811070, anexo
						5008), desde FECHAINICIO hasta FECHALIMITE en el horario de 8h00 a 13h00 y
						de 14h00 a 15h30.
					</p>
					<div className='flex justify-center'>
					<Button color='primary' className='w-fit text-lg'>Inscríbite aquí</Button>
					</div>
				</div>
				<div className='flex flex-col w-full gap-12'>
					<h1 className='text-left font-extrabold text-primary text-3xl'>IMPORTANTE</h1>
					<ul className='flex flex-col gap-2 list-disc list-inside'>
						<li>
							La fecha y hora de visita a la exposición se definirá en el momento de
							la inscripción.
						</li>
						<li>
							Si la inscripción se realiza de forma presencial, será de acuerdo al
							orden de llegada de los representantes de los colegios.
						</li>
						<li>
							Si la inscripción se hace por web, se debe confirmar el horario de
							visita.
						</li>
						<li>
							La persona que se encargue de inscribir al colegio debe entregar una
							comunicación del Director dirigida al Decano de la Facultad de Ciencias
							– UNI, manifestando el interés que tiene el colegio de participar y en
							donde figure el nombre de la persona encargada de registrar la
							participación de sus alumnos. El modelo de carta se puede descargar
							aqui, y debe ser enviado a través del formulario de inscripción.
						</li>
						<li>
							El número máximo de estudiantes por delegación es de 30, y puede haber
							varias delegaciones por colegio. Los estudiantes deben venir acompañados
							por uno o dos profesores en la fecha y hora asignada para su visita.
							Para cualquier otra consulta, por favor escribir a
							<a
								href='mailto:proy_social_fc@uni.edu.pe'
								className=' text-primary font-bold '>
								{' '}
								proy_social_fc@uni.edu.pe
							</a>
						</li>
					</ul>
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
