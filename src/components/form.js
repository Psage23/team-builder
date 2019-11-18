import React, {useState} from 'react';

const Form = props => {
    const [forms, setForms] = useState({name: "", email: "", role: ""})

    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(forms);
        setForms({name: "", email: "", role: ""})
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

            <label htmlFor="email">Email</label>
            <input 
                name="email" 
                id="email" type="text" 
                placeholder="email"
                onChange={changeHandler} 
                value={forms.email}
            />

            <label htmlFor="role">Role</label>
            <input 
                name="role" 
                id="role" 
                type="text"
                placeholder="role"
                onChange={changeHandler} 
                value={forms.role}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form; 