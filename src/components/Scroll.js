import React from 'react';

// adding scroll wrapper component 
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid #FFFE78', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;