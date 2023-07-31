import { Link, useParams } from "react-router-dom"
import { heroImages } from "../../helpers/heroimages"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    /* const imagePath = `/assets/${id}.jpg` FORMA ANTES DE CORREGIR*/

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        {/* <img src={imagePath} className="card-img" alt={superhero} /> FORMA ANTES DE CORREGIR*/}
                        <img src= { heroImages(`./${ id }.jpg`) } className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                ( alter_ego !== characters )
                                    && <p className="text-muted">{ characters }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más..
                            </Link>                         
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}