import React, { useState, useEffect } from 'react'
import Layout from '@/app/layout'
import { Container, Text, Title } from '@/components/core'
import { getMathProjects as fetchData } from '@/services/fetchProjects'

export default function MatematicaPage({ title }) {
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
					La matemática como disciplina científica permite resolver diversos problemas
					modelando y prediciendo sus comportamientos, para lo cual hace uso de las
					herramientas matemáticas. Su capacidad científica adquirida le permite
					potenciar, dimensionar, controlar y predecir la información mediante modelos
					probabilísticos y estocásticos. Su labor profesional incluye formular y dar
					soluciones a problemas de gran escala; asimismo, es el indicado para formular y
					dar solución numérica mediante simulaciones a modelos que se plantean.
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
