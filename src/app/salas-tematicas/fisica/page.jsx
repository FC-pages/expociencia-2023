import Container from '@/components/Container'
import Layout from '@/app/layout'

export default function FisicaPage({ title }) {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
				<div className='flex flex-col text-justify gap-6 text-base'>
					<p>
						Se mostrará de manera lúdica como interactúan diversos sistemas mecánicos,
						además se hará uso de efectos ópticos para poder ver en cámara lenta algunos
						procesos asociados a los fluidos y las ondas mecánicas.
					</p>
					<p>
						Veremos como se genera la electricidad estática y como se almacena, además
						de generar ondas electromagnéticas y su detección. El cuerpo humano tiene
						propiedades eléctricas, las cuales serán experimentadas, sin ningún riesgo,
						por los participantes.
					</p>
					<p>
						Estas y muchas experiencias más las podrán encontrar en las salas de física.
					</p>
				</div>
			</Container>
			<div className='bg-red-100'>
				<Container className='flex flex-col py-6 gap-6 pb-10'>
					<h2 className='text-3xl font-bold mb-2 italic'>Relación de experimentos</h2>
					<div className='font-semibold'>
						<ul className='grid grid-cols-3 list-disc gap-10 text-base'>
							<li>Tensegridad</li>
							<li>Tubo de Rubens</li>
							<li>Péndulos danzantes</li>
							<li>Cañón de alcohol</li>
							<li>Aero deslizador</li>
							<li>Anillos de Thompson</li>
							<li>Placa de Chladni</li>
							<li>Braquistocrona magnética</li>
							<li>Motor de Stirling</li>
							<li>Cajita electrostática</li>
							<li>Fluorescencia</li>
							<li>Efectos estroboscópicos</li>
							<li>Reflexión y refracción de la luz</li>
							<li>Generación y detección de ondas electromagnéticas</li>
							<li>y muchos más ...</li>
						</ul>
					</div>
				</Container>
			</div>
		</Layout>
	)
}
