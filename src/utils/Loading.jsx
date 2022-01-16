import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = () => {
    return <ReactLoading className='gunpla-loading' type={'spinningBubbles'} color={'#4169E1'} height={250} width={250}/>
}

export default Loading;