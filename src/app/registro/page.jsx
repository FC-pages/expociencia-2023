import Layout from '@/app/layout'
import { Container } from '@/components/core'

export default function RegistroPage({ title }) {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
			</Container>
		</Layout>
	)
}
