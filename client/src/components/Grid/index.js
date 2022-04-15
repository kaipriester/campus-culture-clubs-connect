import React from 'react';
import './grid.css';
import Card from '../../components/Card'

//Grid used to render all the different cards
const Grid = ({Clubs, header, DefaultClubImage}) => {
    return(
        <div className='container'>
            <h1 className='header'> {header}</h1>
            <div className='content'> 
                {      
                    Clubs.map((club) => <Card 
                        image={DefaultClubImage} 
                        title={club.title}
                        desc={club.desc}
                    />)
                }
                
            </div>
        </div>
    )
}

export default Grid;