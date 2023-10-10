import { FaMap, FaPhone, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Container } from '@/components/core'

export default function Footer() {
	return (
		<footer className='bg-primary text-white'>
			<Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-4 gap-4'>
				<div className='flex flex-col gap-2'>
					<a href='https://fc.uni.edu.pe' target='_blank' rel='noopener noreferrer'>
						<img src='/images/logo-fc.webp' alt='Logo FC-UNI' className='h-24 w-fit' />
					</a>
					<div>
						<div className='flex flex-row items-start gap-2'>
							<FaMap className='mt-2'/>
							Puerta #5 – Av. Tupac Amaru N° 210 Rimac
						</div>
						<div className='flex flex-row items-center gap-2'>
							<FaPhone />
							<p>Teléfono: (51-1) 381-3868</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='text-lg font-medium'>Pregrado</p>
					<ul>
						<li>
							<a
								href='https://fc.uni.edu.pe/escuela-profesional-de-ciencia-de-la-computacion/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm'>
								Escuela Profesional de Ciencias de la Computación
							</a>
						</li>
						<li>
							<a
								href='https://fc.uni.edu.pe/escuela-profesional-de-ingenieria-fisica/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm'>
								Escuela Profesional de Ingeniria Física
							</a>
						</li>
						<li>
							<a
								href='https://fc.uni.edu.pe/escuela-profesional-de-fisica/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm'>
								Escuela Profesional de Física
							</a>
						</li>
						<li>
							<a
								href='https://fc.uni.edu.pe/escuela-profesional-de-matematica/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm'>
								Escuela Profesional de Matemática
							</a>
						</li>
						<li>
							<a
								href='https://fc.uni.edu.pe/escuela-profesional-de-quimica/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm'>
								Escuela Profesional de Química
							</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='text-lg font-medium'>Siguenos en</p>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=100063482613966'
								target='_blank'
								rel='noopener noreferrer'
								className='flex flex-row items-center gap-2'>
								<FaFacebookF />
								Facebook
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/channel/UCZza82v4Mb5W2M6QrMJrECw'
								target='_blank'
								rel='noopener noreferrer'
								className='flex flex-row items-center gap-2'>
								<FaYoutube />
								Youtube
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/expociencia_fc/'
								target='_blank'
								rel='noopener noreferrer'
								className='flex flex-row items-center gap-2'>
								<FaInstagram />
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	)
}
