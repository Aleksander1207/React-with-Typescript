import React, { useState } from "react";
import { IState as Props } from '../App'; 

interface IProps {
    people : Props["people"],
    setPeople : React.Dispatch<React.SetStateAction<Props["people"]>> 
}

const AddToList : React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name : "",
        image : "",
        age : "",
        note : ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    const handleClick = () => {
        if(!input.name || !input.age || !input.image){
            return ;
        }

        setPeople([
            ...people,
            {
                name : input.name,
                age : parseInt(input.age),
                url : input.image,
                note : input.note
            }
        ]);

        setInput({
            name : "",
            image : "",
            age : "",
            note : ""
        });
    };

    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} name="name" onChange={handleChange} />
            <input type="text" placeholder="Image URL" className="AddToList-input" value={input.image} name="image" onChange={handleChange} />
            <input type="text" placeholder="Age" className="AddToList-input" value={input.age} name="age" onChange={handleChange} />
            <textarea placeholder="Notes" className="AddToList-input" value={input.note} name="note" onChange={handleChange} />
            <button type='button' className="AddToList-btn" onClick={handleClick}>Add To List</button>
        </div>
    );
}

export default AddToList;