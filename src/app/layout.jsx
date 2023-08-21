import { useEffect } from 'react'

export default function Layout({ children, title }) {
	useEffect(() => {
		document.title = `Expociencia 2023 ${title ? `| ${title}` : ''}`
	}, [title])

	return <main className='text-gray-800'>{children}</main>
}
