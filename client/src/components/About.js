import React from 'react';

const team = [
    {
        name: "Katie",
        loves: "colors",
        email: "katiesmith@example.com"
    },
    {
        name: "Ryan",
        loves: "bubbles",
        email: "ryanmiller@example.com"
    }
];

const About = () => {
    return (
        <>
            <h2>About the Bubble App</h2>
            <p>Easily keep track of your favorite colors with fun, aesthetically-pleasing bubbles.</p>
            <h3>Our Mission</h3>
            <p>To fill the world with bubble of color.</p>
            <h3>Our Team</h3>
            {team.map(person => {
                return (
                    <>
                        <h4>{person.name}</h4>
                        <p>{person.name} loves {person.loves}</p>
                        <p>Email {person.name} at {person.email}</p>
                    </>
                )
            })}
        </>
    )
};

export default About;