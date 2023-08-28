import React from 'react'

function Container({ children, className, background }) {
	const classes = [
		'max-w-screen-sm',
		'md:max-w-screen-md',
		'lg:max-w-screen-lg',
		'mx-auto',
		className??''
	].join(' ')

	return <section className={background}><div className={classes}>{children}</div></section>
}

export default Container
