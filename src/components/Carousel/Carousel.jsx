import React, { useEffect, useState } from "react"
import './Carousel.css'

function Carousel() {
    const [data, setData] = useState([])
    const [visibleCards, setVisibleCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const displyedCards = 2

    useEffect(() => {
        const timer = setInterval(() => {
            showNext();
        }, 3000);
        return () => clearInterval(timer);
    });

    // https://randomuser.me/api/  не отвечает, заменено на 
    // https://jellybellywikiapi.onrender.com/swagger/index.html

    useEffect(() => {
        setLoading(true)
        fetch('https://jellybellywikiapi.onrender.com/api/beans')
            .then(response => response.json())
            .then(data => {
                setData(data.items)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => setLoading(false))
    }, [])

    function createCards(data) {
        const slicedCards = data.slice(currentIndex, currentIndex + displyedCards);
        setVisibleCards(slicedCards)
    }

    function showNext() {
        setVisibleCards([])
        setCurrentIndex(currentIndex + displyedCards);
    }

    function showPrew() {
        setVisibleCards([])
        setCurrentIndex(currentIndex - displyedCards);
    }

    useEffect(() => {
        createCards(data)
        if (currentIndex >= data.length) {
            setCurrentIndex(0);
        }
    }, [data, currentIndex])

    if (error) return <p>Что-то пошло не так. Попробуйте перезагрузить страницу</p>
    if (loading) return <p>Загрузка....</p>

    return (
        <>
            <div className="carousel__header">
                <h1>Асинхронный JavaScript</h1>
                <h2>3.1 Fetch API</h2>
                <h2>3.2 Карусель изображений</h2>
            </div>
            <div className="carousel">
                <button onClick={showPrew} className="carousel__button">&lt;</button>
                <ul className="carousel__list">
                    {visibleCards.map((item) => (
                        <li key={item.beanId} className="card" style={{ backgroundColor: item.backgroundColor }}>
                            <img className="card__image" src={item.imageUrl} alt='изображение фасоли' />
                            <p className="card__description">{item.flavorName}</p>
                            <p className="card__description">{item.description}</p>
                            <p className="card__ingredients">{item.ingredients.join(', ')}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={showNext} className="carousel__button">&gt;</button>
            </div>
        </>
    )
}

export default Carousel