import React from 'react'

export default function Text({ children, className }) {
	const classes = ['text-base', className ?? ''].join(' ')

	return <p className={classes}>{children}</p>
}
