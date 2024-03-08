import { Link } from 'react-router-dom';
import '../../App.css'
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <Link to="/home">Home</Link>
            <param>Esta é a pagina que busca lhe informar sobre ela mesma</param>
        </div>
    )
}
export default About;