import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav className='header__nav'>
                <Link to={'/ReactTestApp/notes'} className='header__item'>Список дел</Link>
                <Link to={'/ReactTestApp/carousel'} className='header__item'>Карусель</Link>
                <Link to={'/ReactTestApp/calculator'} className='header__item'>Калькулятор</Link>
                <Link to={'/ReactTestApp/library'} className='header__item'>Библиотека</Link>
                <Link to={'/ReactTestApp/algorithms'} className='header__item'>Алгоритмы</Link>
            </nav>
        </div>
    )
}

export default Header
