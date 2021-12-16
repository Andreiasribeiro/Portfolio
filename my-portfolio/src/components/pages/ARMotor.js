import React from 'react'
import './WorkContent.css';


function ARMotor() {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <h1>AR Motor Web-Based App</h1>
            <section>
                <div className="banner-armotor">
                </div>
            </section>

            <div className='text-armotor'>
                <p>AR MOTOR Garage is booking system web-based application developed for a small garage,
                    which allows the users to register and book services available in the system.
                    There is a dashboard where the garage’s owner can manage the bookings updating
                    them or adding additional parts, services, and allocating staff for each booking.
                    Also, one invoice can be generated with all information about the booking. </p>
                <br></br>
                <p>I have built this application in JavaScript, and the technologies used were React Js for the front-end,
                    Node Js for the API, and MongoDB to store data.</p>
                    <br></br>
                <p>This project was developed as a final graduation project for my <a href="https://www.cct.ie/course/postgraduate-higher-diploma-in-science-in-computing-full-time/" target="_blank" >Higher Diploma in Science in Computing –</a> [NFQ Level 8]  at <a href="https://www.cct.ie/" target="_blank">CCT College Dublin</a>.</p>
                <p> For additional information about this project please visit:</p>
                <p><a href=" https://youtu.be/USOe2FrA8Bc" target="_blank">Brief explanation about this project</a></p>
                <p><a href="https://www.figma.com/file/yTW4VxE6gvzdGPCbnnLYjW/Ger's-Garage?node-id=21%3A11" target="_blank">Initial UI sketch on figma</a></p>
                <p><a href="https://github.com/Andreiasribeiro/Garage_Booking_App" target="_blank">Code on GitHub</a></p>
               <br></br>
               
            </div>

        </div>

    );
}

export default ARMotor
