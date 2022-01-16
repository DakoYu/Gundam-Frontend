import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import axios from 'axios';
import Loading from '../../utils/Loading';
import './News.css';

const imageFormat  = lst => {
    return lst.map(e => ({ url: `${process.env.REACT_APP_API}image/${e.img}` }))
}

const News = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(undefined);

    const getImgaes = async() => {
        try {
            const url = `${process.env.REACT_APP_API}newest`;
            const res = await axios.get(url);
            console.log(url)
            const img = imageFormat(res.data.gunpla);
            setImages(img);
            setLoading(false);
        } catch (e) {
        }
    }

    const setWidthHandler = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        getImgaes();
        window.addEventListener('resize', setWidthHandler);

        return () => window.removeEventListener('resize', setWidthHandler)
    }, [])

    if (loading) return <Loading />

    return (
        <section className="news">
            <h1>Newest Model Kits</h1>
            <SimpleImageSlider
                className={'image-slider'}
                width={width> 728 ? 1024 : 400}
                height={512}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </section>
    )
}

export default News;