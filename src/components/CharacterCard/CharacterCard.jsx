import React from 'react';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = ({id, title, imageUrl, family, fullName}) => {
    
    return (
        <div>
            <img src={imageUrl} alt="img not found" />
            <p>ID: {id}</p>
            <p>Name: {fullName}</p>
            <p>Title: {title}</p>
            <p>Family: {family}</p>
        </div>
    );
};

export default CharacterCard;
