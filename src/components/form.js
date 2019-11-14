import React, {useState} from 'react';

const Form = props => {
    const [forms, setForms] = useState({name: "", location: "", gender: ""})

    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(forms);
        setForms({name: "", location: "", gender: ""})
    };
    return(
        <form onSubmit={submitForm} className="form">
            <label htmlFor="name">Name</label>
            <input 
                name="name" 
                id="name" type="text" 
                placeholder="name" 
                onChange={changeHandler} 
                value={forms.name}
            />

            <label htmlFor="location">Location</label>
            <input 
                name="location" 
                id="location" type="text" 
                placeholder="location" 
                onChange={changeHandler} 
                value={forms.location}
            />

            <label htmlFor="gender">Gender</label>
            <input 
                name="gender" 
                id="gender" 
                type="text" 
                placeholder="gender" 
                onChange={changeHandler} 
                value={forms.gender}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form; 