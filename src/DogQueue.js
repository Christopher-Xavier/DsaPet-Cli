
import React, { useState } from 'react';
import ApiServices from './ApiServices';

import '../src/index.css';

function DogsQueue(props) {
    const [pets, setPets] = useState({});

    ApiServices.getPets()
        .then((res) => setPets({...res}));

    const handleSubmit = (event) => {
        event.preventDefault();

        ApiServices.removePet(event.target.id)
        ApiServices.removePerson()
    }

    if (!pets.dog) {
        return <p className='loadingMessage'>
          Who let the dogs out..?!!!
        </p>;
    }

    return (
        <div className='dogList'>

            <img 
                className='dogIMG'
                src={pets.dog.imageURL} 
                alt='a dog' />

            {props.adopt && 
                <button 
                    className='dog formButton2' 
                    onClick={(event) => handleSubmit(event)}
                >
                    Take Me Home
                </button>
            } 


            <ul className='listItems'>
                <li>
                    <span className='bold'>
                        Name: 
                    </span> {pets.dog.name}
                </li>

                <li>
                    <span className='bold'>
                        Breed: 
                    </span> {pets.dog.breed}
                </li>

                <li>
                    <span className='bold'>
                        Gender:  
                    </span> {pets.dog.gender}
                </li>

                <li>
                    <span className='bold'>
                        Description:  
                    </span> {pets.dog.description}
                </li>

                <li>
                    <span className='bold'>
                        Story:  
                    </span> {pets.dog.story}
                </li>
            </ul>

        </div>
    )
}

export default DogsQueue;