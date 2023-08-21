import Container from '@/components/Container'
import Layout from '@/app/layout'

const title = 'Física'

export default function FisicaPage() {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<h1 className='text-4xl font-bold mb-2 border-b-4 border-primary'>{title}</h1>
			</Container>
		</Layout>
	)
}
