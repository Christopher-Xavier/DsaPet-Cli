import React from 'react';

import '../src/index.css';

function PeopleQueue(props) {

  return (
    <div className='peopleList'>

      { props.adopt && 
        (<div className='adoptMessage emphasis'>
          <p>Hooray! Your up {props.queue[0]}</p>
          <p>Now choose your pet!!</p>
        </div>)
      }

      <ol className='peopleListSection'>
        {props.queue.map((person, index) =>
          (<li 
            className='peopleListItems'
            key={index}>
            {person}
          </li>))
        }
      </ol>
      
    </div>
  );
}

export default PeopleQueue;