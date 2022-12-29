import SearchIcon from '@mui/icons-material/Search';
import logo from "../../logo-netflix.png"
import './Peliculas.css';

const Peliculas = () =>{
    return (
        <div className="header">
            <div className='menu_header'>
          <div className='logo'>
             <img src={logo} width="100" height="30" className='logo_img' alt="logo" />
          </div>
         <nav className='menu_container'>
            <ul className='menu_navegacion'>
                <li><a href="">Series </a></li>
                <li><a href="">Peliculas</a></li>
                <li><a href="">Novedades populares</a></li>
            </ul>
            <form>
            <div className="search_btn">
            <input type="text" placeholder="Ingrese una pelicula" className="input_search" />
            <SearchIcon className='search_icon' fontSize='large'/>
          
            </div>
            </form>
         </nav>
         </div>
        </div>
    )
}

export default Peliculas