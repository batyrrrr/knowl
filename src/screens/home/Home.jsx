import React, { useState } from 'react'
import './home.scss'

import { IoMdArrowDropdown } from 'react-icons/io'






const Home = () => {

    const [pods, setPods] = useState('')

    const [categories, setCategories] = useState([
        {
            names: ['Танк', 'Вертолет', 'Дельтоплан'],
            name: 'Транспорт'
        },
        {
            names: ['Парашют', 'Прожектор', 'Швейная машинка'],
            name: 'Приборы'

        },
        {
            names: ['Паровая пушка', 'Скорострельный арбалет',],
            name: 'Оружие'

        }
    ])

    const indexOfArr = (index) => {
        const idOfNames = categories[index].names
        console.log(idOfNames)
        setPods(idOfNames)
    }

    return (
        <div className='home'>
            <div className="container">
                <h1 className="home__title">Научный проект</h1>
                <div className="home__content">
                    <div className='home__list' >
                        {categories.map((categorie, index) =>

                            <div onClick={() => indexOfArr(index)} className='home__link'>{categorie.name}
                                <IoMdArrowDropdown className='home__icon' />
                            </div>
                        )}
                        <div className="home__categories">
                            <div className={`${pods.length !== 0 && 'bg'} home__categorie `}>
                                {pods.length === 0 ? <h5>Выберите категорию</h5> :
                                    pods.map((pod) => (
                                        <div className='home__pod'>
                                            {pod}
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Home