import React from 'react';

//A single card component

const Card = ({ id, name, email }) => {
    return(
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${ id }.png?size=200x200`}/>
            <div className="tc">
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;