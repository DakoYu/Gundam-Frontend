import gundam from '../../assets/img/gundam.jpeg'
import './Info.css';

const Info = () => {
    return (
        <section className='gunpla-story'>
            <div className='gunpla-title'>
                <img src={gundam} alt='gundam'/>
                <h1>Gunpla Journey</h1>
            </div>
            <h2>Gundam is always my top hobby. I've been building Gunpla since I was a kid. I would use this website to host my newest model kits!</h2>
        </section>
    )
}

export default Info