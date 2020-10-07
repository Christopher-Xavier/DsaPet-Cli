import React, { useState } from 'react';
import ApiServices from './ApiServices';

import '../src/index.css';

function CatsQueue(props) {
    const [pets, setPets] = useState({});

    ApiServices.getPets()
        .then((res) => setPets({...res}));

    const handleSubmit = (event) => {
        event.preventDefault();

        ApiServices.removePet(event.target.id)
        ApiServices.removePerson()
    }

    if (!pets.cat) {
        return <p className='loadingMessage'>
          Patience please, we're herding cats...
        </p>;
    }

    return (
        <div className='catList'>
            
            <img 
                className='catIMG'
                src={pets.cat.imageURL} 
                alt='a cat' />

            {props.adopt && 
                <button 
                    className='cat formButton2' 
                    onClick={(event) => handleSubmit(event)}
                >
                    Take Me Home
                </button>
            } 

    
            <ul className='listItems'>
                <li>
                    <span className='bold'>
                        Name: 
                    </span> {pets.cat.name}
                </li>

                <li>
                    <span className='bold'>
                        Breed: 
                    </span> {pets.cat.breed}
                </li>

                <li>
                    <span className='bold'>
                        Gender:  
                    </span> {pets.cat.gender}
                </li>

                <li>
                    <span className='bold'>
                        Description:  
                    </span> {pets.cat.description}
                </li>

                <li>
                    <span className='bold'>
                        Story:  
                    </span> {pets.cat.story}
                </li>
            </ul>

        </div>
    )
}

export default CatsQueue;