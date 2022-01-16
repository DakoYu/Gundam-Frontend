import './About.css';

const About = () => {
    return (
        <section className='container'>
            <div className='about'>
                <h1><i className="uil uil-hipchat"></i>Greeting!</h1>
                <img  src={'https://www.whats-on-netflix.com/wp-content/uploads/2021/06/Netflix-Anime-Movie-Mobile-Suit-Gundam-Hathaway-What-We-Know-So-Far-copy.jpg'} alt='gundam'/>
                <p>
                    My name is Dako and my passion is programming and building Gunpla. I really enjoy watching the Gundam Series. 
                    My favourite Gunpla grade is Real Grade and Perfect Grade. I used to build lots of Master Grade Kits in China.
                    I built this website with React for the frontend and Python for the backend. The framework for Python is Flask.
                    You can also leave a comment on the model or hit me up on the social media!
                </p>
            </div>
        </section>
    )
}

export default About;