import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    
    const dispatch = useDispatch();

    const house = useSelector(state => state.house)

    React.useEffect(() => {
        dispatch(getHouse(props.match.params.houseId))
    }, []);

    return (
        <div>
            <h3>House: {house.name}</h3>
            <h3>Region: {house.region}</h3>
            <h3>Words: {house.words}</h3>
            {
                house.characters?
                house.characters.map(c => (
                    <CharacterCard 
                    key={c.id}
                    title={c.title}
                    fullName={c.fullName}
                    id={c.id}
                    family={c.family}
                    imageUrl={c.imageUrl}/>
                )) : <h4>Characters not found</h4>
            }
        </div>
    );
};

export default HouseDetail;
