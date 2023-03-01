import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Olá, <br /> Eu sou
                <img src={LogoTitle} alt="developer" />
                auro
                <br />
                web developer
                </h1>
                <h2>Fullstack Developer / React / Node / PHP</h2>
                <Link to="/contact" className="flat-button">FALE COMIGO</Link>
            </div>
        </div>
    )
}

export default Home