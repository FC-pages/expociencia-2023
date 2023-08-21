import Container from "@/components/Container"
import Navbar from "@/components/Navbar"

function Header() {
	return (
        <header className="bg-header bg-cover bg-bottom select-none text-primary">
            <Container className="flex flex-row items-center gap-2 md:gap-4 py-6">
                <img src="/images/logo-uni.webp" alt="Logo UNI" className="w-20 md:w-28 lg:w-32" />
                <div className="flex flex-col justify-center md:gap-2 py-2 min-h-[150px] md:min-h-[180px] lg:min-h-[220px]">
                    <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold">Expociencia 2023</h1>
                    <h2 className="text-xl md:text-5xl lg:text-6xl font-medium">Feria de divulgación científica</h2>
                </div>
            </Container>
            <Navbar />
        </header>
    )
}

export default Header