import React, { Component } from 'react'

function Contact() {
    return (
        <section>
            <h2>Contact information:</h2>
            <ul>
                <li>phone: +995 558 293 519</li>
                <li>email: sejeks@gmail.com</li>
                <li>linkedin: <a href={'https://www.linkedin.com/in/sergei-ivanov-6a1216224/'} target={"_blank"} rel={"noreferrer"} >https://www.linkedin.com/in/sergei-ivanov-6a1216224/</a></li>
                <li>telegram: <a href={'https://t.me/sejeks'} target={"_blank"} rel={"noreferrer"} >https://t.me/sejeks</a></li>
                <li>github: <a href={'https://github.com/sejeks'} target={"_blank"} rel={"noreferrer"} >https://github.com/sejeks</a></li>
            </ul>
        </section>
    )
}

export default Contact
