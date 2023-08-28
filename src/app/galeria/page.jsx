import ImageGallery from 'react-image-gallery'
import Layout from '@/app/layout'
import { Container } from '@/components/core'

import 'react-image-gallery/styles/css/image-gallery.css'

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

export default function GaleriaPage({ title }) {
	return (
		<Layout title={title}>
			<Container className='flex flex-col items-center py-6 gap-6'>
				<h1 className='text-4xl mb-2 font-bold border-b-4 border-primary'>{title}</h1>
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
