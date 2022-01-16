import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/cookie';
import { saveItem, getItem, clearItems } from '../../utils/storage';
import './AddGunpla.css';

const AddGunpla = props => {
    const [gunpla, setGunpla] = useState({
        title: '',
        name: '',
        grade: 'High Grade',
        content: '',
        buttonText: 'post'
    });

    const [files, setFiles] = useState([]);

    const inputHandler = name => e => {
        if (name !== 'buttonText') saveItem(name, e.target.value);

        setGunpla(prev => {
            return {...prev, [name]: e.target.value, buttonText: 'post'}
        });
    }

    const filesHandler = e => {
        Object.entries(e.target.files).forEach(([k, v]) => setFiles(prev => [...prev, v]))
    }

    const addGunpla = async() => {
        try {
            const token = getCookie('token');

            const url = `${process.env.REACT_APP_API}gunpla`;

            const formData = new FormData();

            formData.append('title', gunpla.title);
            formData.append('name', gunpla.name);
            formData.append('grade', gunpla.grade);
            formData.append('content', gunpla.content);
            files.forEach(e => formData.append('file', e))

            await axios.post(url, formData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });


            setGunpla({
                title: '',
                grade: '',
                content: '',
                buttonText: 'post'
            });

            setFiles([]);
            props.closeModal();
            clearItems();
        } catch(e) {
            console.log(e.response.data)
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        setGunpla(prev => {
            return {...prev, buttonText: 'posting'}
        })
        addGunpla();
    }

    const update = (key, val) => {
        setGunpla(prev => {
            return {...prev, [key]: val}
        })
    }

    const sessionHandler = () => {
        const title = getItem('title');
        const name = getItem('name');
        const grade = getItem('grade');
        const content = getItem('content');

        if (title) update('title', title);
        if (name) update('name', name);
        if (grade) update('grade', grade);
        if (content) update('content', content);
    }

    useEffect(() => {
        sessionHandler();
    }, [props.openModal]);

    return (
        <form className='gunpla-form' onSubmit={submitHandler}>
            <p>Title</p>
            <input type='text' value={gunpla.title} onChange={inputHandler('title')} required/>
            <p>Name</p>
            <input type='text' value={gunpla.name} onChange={inputHandler('name')} required/>
            <p>Grade</p>
            <select 
                className='grade-select' 
                onChange={inputHandler('grade')}
                value={gunpla.grade}
            >
                <option value='High Grade'>High Grade</option>
                <option value='Real Grade'>Real Grade</option>
                <option value='Master Grade'>Master Grade</option>
                <option value='Perfect Grade'>Perfect Grade</option>
            </select>
            <p>Content</p>
            <textarea type='text' rows='12' value={gunpla.content} onChange={inputHandler('content')}  required/>
            <p>Upload Images</p>
            <input type='file' multiple id='file' name='file' accept='image/*' onChange={filesHandler} required/>
            <button>{gunpla.buttonText}</button>
        </form>
    )
}

export default AddGunpla;