import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <div className="landing-page">
        <div className="season-section grow">
            <div className="text-container">
                <h1>Spring</h1>
                <Link to="/spring"><button>Learn More &gt;&gt;</button></Link>
            </div>
            <span>
                <img src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Concrete road between green trees by Studio Dekorasyon @t_t https://unsplash.com/photos/vngzm4P2BTs"/>
            </span>
        </div>
        <div className="season-section grow">
            <div className="text-container">
                <h1>Summer</h1>
                <Link to="/summer"><button>Learn More &gt;&gt;</button></Link>
            </div>
            <span>
            <img src="https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="body of water scenery by Chris Galbraith @heycrisso at Turquoise Bay, Australia on August 17, 2018 https://unsplash.com/photos/7XAM0J3dNQM"/>
            </span>
        </div>
        <div className="season-section grow">
            <div className="text-container">
                <h1>Autumn</h1>
                <Link to="/autumn"><button>Learn More &gt;&gt;</button></Link>
            </div>
            <span>
            <img src="https://images.unsplash.com/photo-1571514507804-28e1f9ab5b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Autumn Vibes from Graz by Daniel J. Schwarz at Graz, Österreich on on October 19, 2019 https://unsplash.com/photos/7-oM8eFUkFQ"/>
            {/* <img src="https://images.unsplash.com/photo-1601230469159-77a3bfe240c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="black ceramic mug on log coaster surrounded with autumn leaves by Sergey Norkov @tipod on September 27, 2020 https://unsplash.com/photos/wKFXCOWdcjQ"/> */}
            </span>
        </div>
        <div className="season-section grow">
            <div className="text-container">
                <h1>Winter</h1>
                <Link to="/winter"><button>Learn More &gt;&gt;</button></Link>
            </div>
            <span>
            <img src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" alt="snow covered walkway during winter by Josh Hild on March 2, 2019 https://unsplash.com/photos/_TuI8tZHlk4"/>
            </span>
        </div>        
    </div>
    )
}