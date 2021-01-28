import React from 'react'
import {Heroes} from '../data/Heroes'
export const getHeroesByName = (name="") => {
    if(name===""){
        return []
    }
    name=name.toLocaleLowerCase();
    return Heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(name))
}
