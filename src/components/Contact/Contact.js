import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../assets/c.png"
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1muuoto', 'template_0bqrvgr', e.target, 'U9HhMewfZPvZANugj')
            .then((result) => {
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({ from_name: '', from_email: '', message: '' });
            }, (error) => {
                toast.error('Error sending message. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className='contact'>
            <img src={image} alt="projects" className="contactImage" />
            <div className="contact-form">
            <div className='contactHeading'>Contact Me</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name :</label>
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            placeholder='Your name'
                        />
                    </div>
                    <div>
                        <label>Email :</label>
                        <input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            placeholder='Your email'
                        />
                    </div>
                    <div>
                        <label>Message :</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Type your message...'
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
