import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        question: "",
    });

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const submit = e => {
        e.preventDefault();
        setFormState({
            name: "",
            email: "",
            question: ""
        });
    }

    return (
        <>
            <p>Have a question?</p>
            <p>Contact us!</p>
            <form onSubmit={submit}>
                <label htmlFor="name">Your Name:</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChanges}
                />
                <label htmlFor="email">Your Email Address:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChanges}
                />
                <label htmlFor="question">Your Question or Concern:</label>
                <input 
                    type="textarea"
                    name="question"
                    id="question"
                    value={formState.question}
                    onChange={handleChanges}
                />
                <button>Submit</button>
            </form>
        </>
    );
};

export default ContactForm;