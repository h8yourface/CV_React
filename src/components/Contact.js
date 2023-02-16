import React from 'react'

function Contact() {
    return (
        <section>
            <h2>Contact information:</h2>
            <ul>
                <li key='phone'>phone: +995 558 293 519</li>
                <li key='email'>email: sejeks@gmail.com</li>
                <li key='linkedin'>linkedin: <a href={'https://www.linkedin.com/in/sergei-ivanov-6a1216224/'} target={"_blank"} rel={"noreferrer"} >https://www.linkedin.com/in/sergei-ivanov-6a1216224/</a></li>
                <li key='telegram'>telegram: <a href={'https://t.me/sejeks'} target={"_blank"} rel={"noreferrer"} >https://t.me/sejeks</a></li>
                <li key='github'>github: <a href={'https://github.com/sejeks'} target={"_blank"} rel={"noreferrer"} >https://github.com/sejeks</a></li>
            </ul>
        </section>
    )
}

export default Contact
