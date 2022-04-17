import React from 'react';
import './grid.css';
import Card from '../../components/Card'

//images
import ActingImage from './../../images/acting.jpg';
import BeeImage from './../../images/bee.webp';
import CookingImage from './../../images/cooking.jpg';
import OrigamiImage from './../../images/origami.jpg';
import PenguinImage from './../../images/penguin.webp';
import SaseImage from './../../images/sase.jpg';
import SwimImage from './../../images/swimming.jpg';
import TreeImage from './../../images/tree.png';

//Grid used to render all the different cards
const Grid = ({Clubs, header, DefaultClubImage}) => {
    return(
        <div className='container'>
            <h1 className='header'> {header}</h1>
            <div className='content'> 
                <Card image={SaseImage} title={Clubs[0].title} desc={Clubs[0].desc}/>
                <Card image={SwimImage} title={Clubs[1].title} desc={Clubs[1].desc}/>
                <Card image={TreeImage} title={Clubs[2].title} desc={Clubs[2].desc}/>
                <Card image={CookingImage} title={Clubs[3].title} desc={Clubs[3].desc}/>
                <Card image={OrigamiImage} title={Clubs[4].title} desc={Clubs[4].desc}/>
                <Card image={ActingImage} title={Clubs[5].title} desc={Clubs[5].desc}/>
                <Card image={BeeImage} title={Clubs[6].title} desc={Clubs[6].desc}/>
                <Card image={PenguinImage} title={Clubs[7].title} desc={Clubs[7].desc}/>
            </div>
        </div>
    )
}

/*
{      
    Clubs.map((club) => <Card 
        image={DefaultClubImage} 
        title={club.title}
        desc={club.desc}
    />)
}
*/

export default Grid;