import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {

	return (
		<React.StrictMode>
			<NextUIProvider>
                <Header />
                <Outlet />
                <Footer />
			</NextUIProvider>
		</React.StrictMode>
	)
}
