import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav className='header__nav'>
                <Link to={'/'} className='header__item'>Список дел</Link>
                <Link to={'/carousel'} className='header__item'>Карусель</Link>
                <Link to={'/calculator'} className='header__item'>Калькулятор</Link>
                <Link to={'/library'} className='header__item'>Библиотека</Link>
                <Link to={'/algorithms'} className='header__item'>Алгоритмы</Link>
            </nav>
        </div>
    )
}

export default Header
