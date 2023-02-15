import React, { Component } from 'react'
import data from '../data/SergeiIvanov.json'


function Home() {
    return (
        <div>
            <section>
                <h1>{data.name}</h1>
                <h4>{data.title}</h4>
                <h4>{data.location}</h4>
            </section>
            <hr />
            <section>
                <h2>Summary</h2>
                <p>{data.summary}</p>
            </section>
            <hr />
            <section>
                <h2>Experience</h2>
                {data.experience.map(exp => (
                    <>
                        <h4>{exp.name}</h4>
                        <small>{exp.years}</small>
                        <p><em>{exp.skills.join(', ')}</em></p>
                        <ul>
                            {exp.resp.map(resp => <li>{resp}</li>)}
                        </ul>
                    </>
                ))}


            </section>
            <hr />
            <section>
                <h2>Education</h2>
                {data.education.map(educ => (
                    <>
                        <h4>{educ.name}</h4>
                        <small>{educ.years}</small>
                    </>
                ))}

            </section>
            <hr />
            <section>
                <h2>Licenses & Certifications</h2>
                {data.certification.map(cert => (
                    <h4><a target={'_blank'} rel={'noreferrer'}
                        href={cert.link}>
                        {cert.title}</a></h4>
                ))}
            </section>
            <hr />
            <section>
                <h2>Additional skills</h2>
                <ul>
                    {data.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </section>
        </div>
    )
}

export default Home