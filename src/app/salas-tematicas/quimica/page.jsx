import React, { useState, useEffect } from 'react'
import Layout from '@/app/layout'
import { Container, Text, Title } from '@/components/core'
import { getChemistryProjects as fetchData } from '@/services/fetchProjects'

const title = 'Química'

export default function QuimicaPage() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		fetchData('2023-1')
			.then((data) => setProjects(data))
			.catch((err) => console.log(err))
	}, [])

	return (
		<Layout title={title}>
			<Container className='flex flex-col py-16 px-2 gap-4'>
				<div className='flex flex-col-reverse items-center justify-center gap-4 md:flex-row'>
					<Title className='text-center'>{title}</Title>

					<img src='/images/icon-matematica.webp' alt='icono' className='w-36 h-auto' />
				</div>
				<Text className='text-center'>
					La Química es una disciplina científica que se dedica al estudio de la materia,
					sus propiedades, composición, estructura y cambios que experimenta a nivel
					molecular y atómico. Esta ciencia abarca una amplia gama de áreas y subcampos, y
					su objetivo es comprender cómo interactúan y se transforman los átomos y las
					moléculas en diferentes condiciones
				</Text>
			</Container>
			<Container className='py-6 px-2' background='bg-red-100'>
				<Title className='text-start'>Relación de experimentos</Title>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-4 justify-items-start list-disc '>
					{projects.map((project, index) => (
						<li key={index} className='text-base'>
							{project}
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	)
}
