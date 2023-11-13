import React, { useState, useEffect } from 'react'
import Layout from '@/app/layout'
import { Container, Text, Title, Modal } from '@/components/core'
import { getPhysicalProjects as fetchData } from '@/services/fetchProjects'

export default function FisicaPage({ title }) {
	const [open, setOpen] = useState(false)
	const [projects, setProjects] = useState([])

	useEffect(() => {
		fetchData('2023-1')
			.then((data) => setProjects(data))
			.catch((err) => console.log(err))
	}, [])

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<Layout title={title}>
			<Container className='flex flex-col py-16 px-2 gap-4'>
				<div className='flex flex-col-reverse items-center justify-center gap-4 md:flex-row'>
					<Title className='text-center'>{title}</Title>

					<img src='/images/icon-fisica.webp' alt='icono' className='w-36 h-auto' />
				</div>
				<Text className='text-center'>
					Se mostrará de manera lúdica como interactúan diversos sistemas mecánicos,
					además se hará uso de efectos ópticos para poder ver en cámara lenta algunos
					procesos asociados a los fluidos y las ondas mecánicas. Veremos como se genera
					la electricidad estática y como se almacena, además de generar ondas
					electromagnéticas y su detección. El cuerpo humano tiene propiedades eléctricas,
					las cuales serán experimentadas, sin ningún riesgo, por los participantes. Estas
					y muchas experiencias más las podrán encontrar en las salas de física.
				</Text>
			</Container>
			<Container className='py-6 px-2' background='bg-red-100'>
				<Title className='text-start'>Relación de experimentos</Title>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-4 justify-items-start list-disc '>
					{projects.map((project, index) => (
						<li key={index} className='text-base'>
							<button onClick={handleOpen}>{project.title}</button>
							{open && (
								<Modal onClick={handleOpen}>
									<img
										src={project.image}
										alt={project.title}
										className='w-[200px] h-[200px] object-cover rounded-md'
									/>
									<h1 className='font-semibold text-lg'>{project.title}</h1>
									<p className='w-full text-left'>{project.description}</p>
								</Modal>
							)}
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	)
}
