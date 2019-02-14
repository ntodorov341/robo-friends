import React from 'react';
import Card from './Card';

//A component that lists all card components

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot,i) => {
          return (
            <Card 
              key={ robots[i].id } 
              id={ robots[i].id }
              name={ robots[i].name }
              email={ robots[i].email }
            />
          );
        })
      }
    </div>
  );
}

export default CardList;