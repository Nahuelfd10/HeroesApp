import { heroes } from "../data/heroes"


export const getHeroByID = ( id = '' ) => {
    console.log('getHeoById called')
    return heroes.find( hero => hero.id === id)
}