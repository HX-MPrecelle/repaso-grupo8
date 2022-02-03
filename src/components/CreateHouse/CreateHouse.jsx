import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    
    const dispatch = useDispatch();

    const [input, setInput] = React.useState({
        name: "",
        region: "",
        words: "",
    });

    const handleInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createHouse({...input}))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name='name' onChange={handleInput} value={input.name} />
                <label>Region: </label>
                <input type="text" name='region' onChange={handleInput} value={input.region} />
                <label>Words: </label>
                <input type="text" name='words' onChange={handleInput} value={input.words} />
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreateHouse;
