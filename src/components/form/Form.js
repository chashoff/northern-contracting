import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form(){
    const [btnText, setBtn] = useState('Submit');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            name,
            email,
            phone,
            message
        }
        axios.post("http://localhost:4000/api/sendForm", {
            dataToSubmit
        })
        .then((res) => {
            if(res.status === 200) {
                setBtn('Form Submitted!')
            }
        }, (error) => {
            console.log(error);
            setBtn('Submission Failed...')
        });
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <h2 className="contact-h2">CALL US <br/>FOR A FREE<br/> QUOTE<br /><span style={{color: '#FED669'}}>(740)-605-2930</span></h2>
            </div>
            <div className="form-box">
                <h3 className="contact-h3">Lets get in touch!</h3>
                <form className="contact-form" name="contact" method="POST" onSubmit={handleSubmit}>
                    <input className="contact-input" type="text" id="name" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="contact-input" type="email" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="contact-input" type="phone" id="phone" name="phone" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                    <textarea rows="6" className="contact-input" type="message" id="message" name="message" placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)} />
                    <button className="contact-submit-btn" type="submit">{btnText}</button>
                </form>
            </div>
        </div>
    )
}
export default Form;