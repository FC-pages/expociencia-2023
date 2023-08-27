import {Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FaChevronDown, FaCaretRight } from 'react-icons/fa'

import { routes } from '@/routes'
import Container from '@/components/Container'

export default function Navbar() {
	return (
		<div className='bg-primary text-white'>
			<Container className='flex flex-row justify-between h-14'>
				<Link to='/' className='flex flex-row items-center gap-2'>
					<img src='/images/logo.webp' alt='Logo' className='w-8 h-8' />
					<p className='font-medium'>Expociencia 2023</p>
				</Link>
				<NavDesktop routes={routes} />
				<NavMobile routes={routes} />
			</Container>
		</div>
	)
}

function NavDesktop({ routes }) {
	const [activeDropdown, setActiveDropdown] = useState(null)

	return (
		<nav className='hidden md:flex'>
			<ul className='flex flex-row gap-4'>
				{routes.map((route, index) => (
					<li
						key={index}
						onMouseEnter={() => setActiveDropdown(index)}
						onMouseLeave={() => setActiveDropdown(null)}>
						<Link
							to={route.path}
							className='flex flex-row items-center gap-2 h-full font-medium'>
							{route.name} {route.children ? <FaChevronDown size={12} /> : null}
						</Link>
						{route.children && activeDropdown === index ? (
							<DropDown>
								{route.children.map((child, index) => (
									<DropDownItem key={index}>
										<Link
											to={[route.path, child.path].join('')}
											className='flex w-full p-2 font-medium'>
											{child.name}
										</Link>
									</DropDownItem>
								))}
							</DropDown>
						) : null}
					</li>
				))}
			</ul>
		</nav>
	)
}

function DropDown({ children }) {
	return (
		<div className='absolute z-50 w-[250px] p-2 rounded-b-md shadow-md bg-primary'>
			{children}
		</div>
	)
}

function DropDownItem({ children }) {
	return <div className='rounded-md hover:bg-white/20'>{children}</div>
}

function NavMobile({ routes }) {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(!active)
	}

    useEffect(() => {
        if (active) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, [active]);

	return (
		<nav className={'flex flex-col md:hidden'}>
			<MenuIcon state={active} onClick={handleClick} />
			<div>
				{active ? (
					<div className='absolute z-50 left-0 w-full h-full p-2 bg-primary'>
						<ul className='flex flex-col'>
							{routes.map((route, index) => (
								<Fragment key={index}>
									<li onClick={handleClick}>
										<Link
											to={route.path}
											className='flex flex-row h-full font-medium p-2'>
											{route.name}
										</Link>
									</li>
									{route.children &&
										route.children.map((child, childIndex) => (
											<li key={childIndex} onClick={handleClick}>
												<Link
													to={[route.path, child.path].join('')}
													className='flex flex-row items-center w-full px-5 py-2 gap-1'>
                                                    <FaCaretRight size={12} />
													{child.name}
												</Link>
											</li>
										))}
								</Fragment>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</nav>
	)
}

function MenuIcon({ state, onClick }) {
	return (
		<div
			className='flex flex-col justify-center gap-1 px-2 cursor-pointer z-20 h-full'
			onClick={onClick}>
			<div
				className={`h-0.5 w-5  transform origin-center transition-transform bg-white ${
					state ? 'rotate-45 translate-y-1.5' : ''
				}`}></div>
			<div
				className={`h-0.5 w-5  transform origin-center transition-transform bg-white ${
					state ? 'invisible' : ''
				}`}></div>
			<div
				className={`h-0.5 w-5 transform origin-center transition-transform bg-white ${
					state ? '-rotate-45 -translate-y-1.5' : ''
				}`}></div>
		</div>
	)
}
