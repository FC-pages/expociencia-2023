import React from 'react'

export default function Title({ children, className }) {
	const classes = [
		'font-extrabold',
		'uppercase',
		'text-xl',
		'text-primary',
		'md:text-2xl',
		'lg:text-3xl',
		'xl:text-4xl',
		className ?? ''
	].join(' ')

	return <h1 className={classes}>{children}</h1>
}
