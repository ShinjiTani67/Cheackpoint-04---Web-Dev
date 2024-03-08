import { Link } from 'react-router-dom';
import '../../App.css'
const Contacts = () =>{
    return(
        <div>
            <h1>Contacts</h1>
            <Link to="/home">Home</Link>
            <param>Aqui tem os contatos possiveis e futuros</param>
            <section id='contatos_org'>
                <div id='caixa'>
                    Pessoa 1
                </div>
                <div id='caixa'>
                    Pessoa 2 
                </div>
                <div id='caixa'>
                    Pessoa 3
                </div>
            </section>
        </div>
    )
}

export default Contacts;