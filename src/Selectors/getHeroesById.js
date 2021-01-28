import {Heroes} from '../data/Heroes'

export const getHeroesById= (id) => {
    return Heroes.find(heroe=>heroe.id===id);
}
