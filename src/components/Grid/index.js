import React from 'react';
import './grid.css';
import Card from '../../components/Card'

//temporary hardcoded clubs to rend for demo
const clubs = [
    {'title': 'club 1', 'desc': 'This is a description for club 1'},
    {'title': 'club 2', 'desc': 'This is a description for club 2'},
    {'title': 'club 3', 'desc': 'This is a description for club 3'},
    {'title': 'club 4', 'desc': 'This is a description for club 4'},
    {'title': 'club 5', 'desc': 'This is a description for club 5'},
    {'title': 'club 6', 'desc': 'This is a description for club 6'},
    {'title': 'club 7', 'desc': 'This is a description for club 7'},
    {'title': 'club 8', 'desc': 'This is a description for club 8'},
    {'title': 'club 9', 'desc': 'This is a description for club 9'},
];

//Grid used to render all the different cards
const Grid = ({header, content, DefaultClubImage}) => {
    return(
        <div className='container'>
            <h1 className='header'> {header}</h1>
            <div className='content'> 
                {      
                    clubs.map((club) => <Card 
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