import News from './News';
import Info from './Info';
import Getupdate from './Getupdate';
import './Home.css';

const Home = () => {
    return (
        <>
        <div className='container'>
            <News />
            <Info />
        </div>
        <Getupdate />
        </>
        )
}

export default Home;