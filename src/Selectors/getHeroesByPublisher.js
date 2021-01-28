import {Heroes} from '../data/Heroes'

export const getHeroesByPublisher = (publisher) => {
    const validPublisher =["DC Comics","Marvel Comics"];
    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher} not found`);
    }
    return Heroes.filter(heroe=>heroe.publisher===publisher);
}
