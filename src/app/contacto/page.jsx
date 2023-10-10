import { useState, useEffect } from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'
import { BsCheckCircle } from 'react-icons/bs'
import { Container } from '@/components/core'
import Layout from '@/app/layout'
import { submitFormData } from '@/services/fetchForm'

export default function ContactoPage({ title }) {
	const [status, setStatus] = useState()

	useEffect(() => {
		const sendForm = true

		document.cookie = `sendForm=${sendForm}; path=/contacto; SameSite=Lax`

		return () => {
			document.cookie = 'sendForm=; path=/contacto; SameSite=Lax'
		}
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const inputs = e.target.elements
			const data = {}

			for (let i = 0; i < inputs.length; i++) {
				if (inputs[i].name) {
					data[inputs[i].name] = inputs[i].value
				}
			}

			await submitFormData(data)
			setStatus('Nos pondremos en contacto con usted pronto.')
		} catch (error) {
			setStatus('Ah ocurrido un error, porfavor intentelo de nuevo mas tarde.')
		}
	}

	if (status) {
		return (
			<Layout title={title}>
				<Container className='flex flex-col items-center py-6 gap-6 min-h-[428px]'>
					<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
					<BsCheckCircle size={128} className='text-primary' />
					<p className='text-center text-lg'>{status}</p>
				</Container>
			</Layout>
		)
	}

	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6 min-h-[428px]'>
				<h1 className='text-primary font-extrabold text-4xl text-center mb-8'>{title}</h1>
				<form
					onSubmit={handleSubmit}
					method='POST'
					acceptCharset='UTF-8'
					className='flex flex-col gap-4 w-[300px] md:w-[400px] lg:w-[600px]'>
					<Input
						type='text'
						label='Nombres y Apellidos'
						name='Name'
						placeholder='John Doe'
						required
					/>
					<Input
						type='text'
						label='Correo Electronico'
						name='Email'
						placeholder='john.doe@example.com'
						required
					/>
					<Textarea
						type='text'
						label='Mensaje'
						name='Message'
						placeholder='Escribe tu mensaje'
						required
					/>
					<Button type='submit' color='primary' className='w-fit'>
						Enviar
					</Button>
				</form>
			</Container>
		</Layout>
	)
}
