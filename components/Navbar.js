import useCryptoProvider from '../hooks/useCryptoProvider'
import Link from 'next/link'


const Navbar = () => {

    const { theme } = useCryptoProvider()

    return (
        <header className='flex flex-col md:flex-row shadow-sm items-center mx-auto md:px-5 lg:px-28 justify-between font-semibold relative z-10'>
            <Link href={'/'}>
                <div className='flex text-sky-600 text-2xl uppercase gap-1 font-semibold h-10 my-2 md:my-0 md:h-16 items-center cursor-pointer'>
                    <div><i className="fas fa-copyright"></i></div>
                    <p className='font-bold'>Evolution</p>
                </div>
            </Link>
            <div className='flex gap-5'>
                <Link href={'/signin'}>
                    <div className='cursor-pointer p-1 hover:text-sky-600 transition-colors'>Comprar Cripto</div>
                </Link>
                <Link href='/market'>
                    <div className='cursor-pointer p-1 hover:text-sky-600 transition-colors'>Mercado</div>
                </Link>
                <Link href={'/signin'}>
                    <div className='cursor-pointer p-1 hover:text-sky-600 transition-colors'>Trade</div>
                </Link>
            </div>
            <div className='flex my-5 md:my-0 gap-4 items-center'>
                <Link href={'/signin'}>
                    <div className='cursor-pointer hover:text-sky-600 transition-colors'>Iniciar sesion</div>
                </Link>
                <Link href={'/signup'}>
                    <div className='cursor-pointer p-2 bg-sky-600 text-white rounded-md hover:bg-gradient-to-r from-sky-700 to-sky-500'>Registrarse</div>
                </Link>
            </div>
        </header>
    )
}

export default Navbar