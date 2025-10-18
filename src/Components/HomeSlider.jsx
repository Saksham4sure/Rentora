import React from 'react'
import resort from '../assets/images/resort-bg.jpg'
import apartment from '../assets/images/apartment-bg.jpg'
import lakeHouse from '../assets/images/lakehouse-bg.jpg'

const HomeSlider = ({heroCount, className}) => {
    if(heroCount === 0){
        return <img className={className} src={resort} />
    }
    else if(heroCount === 1){
        return <img className={className} src={apartment} />
    }
    else if(heroCount === 2){
        return <img className={className} src={lakeHouse} />
    }
}

export default HomeSlider