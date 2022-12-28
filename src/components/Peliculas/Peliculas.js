import SearchIcon from '@mui/icons-material/Search';

const Peliculas = () =>{
    return (
        <div className="header">
         <nav>
            <ul>
                <li><a href="">Popular </a></li>
                <li><a href="">Documentales</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Drama</a></li>
                <li><a href="">Comedia</a></li>
            </ul>
         </nav>
         <form>
            <div className="search_btn">
            <SearchIcon>
                <input type="text" placeholder="Ingrese una pelicula" className="input_search"> </input>
            </SearchIcon>
            </div>
         </form>
        </div>
    )
}

export default Peliculas