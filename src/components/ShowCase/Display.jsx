import axios from 'axios'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Gunpla from "./Gunpla";
import Loading from '../../utils/Loading';
import './Display.css';

const Display = () => {
    const [models, setModels] = useState([]);
    const[pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const navigate = useNavigate();

    const getQuery = () => {
        const search = location.search
        const params  = new URLSearchParams(search)
        const grade = params.get('grade') ? params.get('grade') : '';
        const page = params.get('page') ? params.get('page') : 1;

        return {
            grade,
            page,
        }
    }

    const getModels = async(page, gr) => {
        try {
            const grade = gr || ''
            const url = `${process.env.REACT_APP_API}gunpla?grade=${grade}&page=${page}`;

            const res = await axios.get(url);

            setModels(res.data.gunpla)
            setPageCount(Math.ceil(res.data.result / 5));
            setLoading(false)
        } catch(e) {
            console.log(e.response)
        }
    }

    const display = models.map(e => {
        return <Gunpla 
            key={e._id}
            title={e.title}
            name={e.name}
            grade={e.grade}
            img={e.img}
            content={e.content}
        />
    })

    
    
    
    useEffect(() => {
        const params = getQuery();
        const grade = params.grade || ''
        if (location.search) {
            getModels(params.page, grade);
        } else {
            getModels(1, grade);
        }
    }, [])
    
    if (loading) return <Loading />
    
    const handlePageClick = e => {
        const params = getQuery();
        const grade = params.grade ? `grade=${params.grade}` : '';
        getModels(e.selected + 1, params.grade)
        navigate(`/gundam?${grade}&page=${e.selected + 1}`)
    }

    return (
        <section className="container">
            {display}
            <div className='page'>
                <ReactPaginate
                    className='page-tool'
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </section>
    )
}

export default Display