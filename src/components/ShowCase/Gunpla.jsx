import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Gunpla.css';

const Gunpla = props => {
    const { title, name, grade, content, img } = props
    const [width, setWidth] = useState(undefined);
    
    const images = img.map((e, i) => {
        return (
            <div key={i}>
                <img src={`${process.env.REACT_APP_API}image/${e}`} alt='gunpla'/>
            </div>
        )
    })

    const setWidthHandler = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setWidthHandler);

        return () => window.removeEventListener('resize', setWidthHandler)
    })

    return (
        <div className='model-info'>
            <Carousel
                className='display'
                dynamicHeight='true'
                width={width > 768 ? '800px' : '300px'}
            >
                {images}
            </Carousel>
            <div className='info'>
                <h1>{title}</h1>
                <h2>Name: {name}</h2>
                <h3>Grade: {grade}</h3>
                <h3>Review:</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Gunpla