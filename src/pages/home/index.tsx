import { Link } from 'react-router-dom';
import '../../App.css'
const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
            <Link to="/contats">Contats</Link>
            <param>Aqui é a home da pagina da frete</param>
        </div>
    )
}

export default Home;