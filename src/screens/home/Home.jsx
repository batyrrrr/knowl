import React, { useState } from 'react'
import './home.scss'

import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'






const Home = () => {

    const [pods, setPods] = useState('')

    const [categories, setCategories] = useState([
        {
            podNames: [{ link: '/Tank', appli: 'Танк' }, { link: '/Vert', appli: 'Вертолет' }, { link: '/Delt', appli: 'Дельтоплан' }],
            name: 'Транспорт',
        },
        {
            podNames: [{ link: '/Para', appli: 'Парашют' }, { link: '/Prozh', appli: 'Прожектор' }, { link: '/Glaz', appli: 'Глазок' }],
            name: 'Приборы'
        },
        {
            podNames: [{ link: '/Paro', appli: 'Паровая пушка' }, { link: '/Scoro', appli: 'Скорострельный арбалет' }],
            name: 'Оружие'
        }
    ])



    const indexOfArr = (index) => {
        const idOfNames = categories[index].podNames
        setPods(idOfNames)
    }

    return (
        <div className='home'>
            <div className="container">
                <h1 className="home__title">Научный проект</h1>
                <div className="home__content">
                    <div className='home__list' >
                        {categories.map((categorie, index) =>
                            <div onClick={() => indexOfArr(index)} className="home__generals">
                                <div className='home__link'>{categorie.name}
                                </div>
                                <IoMdArrowDropdown className='home__icon' />
                            </div>
                        )}
                        <div className="home__categories">
                            <div className={`${pods.length !== 0 && 'bg'} home__categorie `}>
                                {pods.length === 0 ? <div>не выбрана категория</div> :

                                    pods.map((pod) => (
                                        <Link to={pod.link} className='home__pod'>
                                            {pod.appli}
                                        </Link>
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