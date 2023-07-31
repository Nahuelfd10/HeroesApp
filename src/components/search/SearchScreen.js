import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string';
import { useMemo } from "react";

const heroImages = require.context('../../assets/heroes', true);


export const SearchScreen = () => {
   
    
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);    

   const [ formValues, handleInputChange] = useForm({
       searchText: q,
   })


   const { searchText } = formValues;
   
   const heroesFileted = useMemo( () => getHeroesByName( q ), [q] )
   
   
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)
        navigate(`?q=${ searchText }`)
    }
    
    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={  handleSearch }>
                        <input
                            type="text"
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit">
                                Buscar...
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar un heroe </div>
                            : ( heroesFileted.length === 0 )
                                && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }

                    {
                        heroesFileted.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}