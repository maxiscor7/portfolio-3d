import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    errorName: '',
    errorEmail: '',
    errorMessage: '',
  });

  const form = useRef();

  const alertOk = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message has been sent',
      showConfirmButton: true,
      confirmButtonColor: '#91b855'
    });
  }

  const alertNotOk = () => {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Something went wrong',
      showConfirmButton: true,
      confirmButtonColor: '#fb3838'
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formState.errorName && !formState.errorEmail && !formState.errorMessage) {
      emailjs.sendForm('service_k652ie8', 'template_bfxll9a', form.current, 'TXbnkEOtYnmqG7TXV')
        .then((result) => {
          alertOk();
          console.log(result.text);
        }, (error) => {
          alertNotOk();
          console.log(error.text);
        });
    } else {
      alertNotOk();
    }
    e.target.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  const validateName = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (formState.name.length < 3 || !regex.test(formState.name)) {
      setFormState({ ...formState, errorName: "* Make sure to put your full name and don't include numbers or symbols" });
    } else {
      setFormState({ ...formState, errorName: '' });
    }
  }

  const validateEmail = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(formState.email)) {
      setFormState({ ...formState, errorEmail: "* You have entered an invalid email address!" });
    } else {
      setFormState({ ...formState, errorEmail: '' });
    }
  }

  const validateMessage = () => {
    if (formState.message.length < 5) {
      setFormState({ ...formState, errorMessage: '* Your message must have a minimum of 5 characters' });
    } else {
      setFormState({ ...formState, errorMessage: '' });
    }
  }

  return (
    <div className='section-contact'>
      <div className='container-contact'>
        <div className='container-form-input'>
          <div className='container-title-text-contact'>
            <h1>Contact Me</h1>
            <p>Please fill out the form below to get in touch with me, or contact me through my social media channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className='container-social-links-contact'>
              <a href="https://www.linkedin.com/in/maximiliano-enrique-cornalba-1a2429184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Enrique Maximiliano Cornalba">
                <i className="fab fa-linkedin"  style={{ fontSize: '30px', color: '#0298e0', marginRight: '8px', }}></i>
              </a>
              <a href="https://github.com/maxiscor7" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba">
                <i className="fab fa-github" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px', }}></i>
              </a>
              <a href="https://www.instagram.com/cornalbamaxi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Enrique Maximiliano Cornalba">
                <i className="fab fa-instagram" style={{ fontSize: '30px', color: '#C13584', marginRight: '8px', }}></i>
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Full name</label>
            <div className='error'>
              <label>{formState.errorName}</label>
            </div>
            <input
              className='input-style'
              type="text"
              name="name"
              required
              onBlur={validateName}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <div className='error'>
              <label>{formState.errorEmail}</label>
            </div>
            <input
              className='input-style'
              type="email"
              name="email"
              required
              onBlur={validateEmail}
              onChange={handleInputChange}
            />
            <label>Message</label>
            <div className='error'>
              <label>{formState.errorMessage}</label>
            </div>
            <textarea
              className='textarea-input'
              name="message"
              required
              onBlur={validateMessage}
              onChange={handleInputChange}
            />
            <input
              className='button-submit'
              type="submit"
              value="Send"
              disabled={formState.errorName || formState.errorEmail || formState.errorMessage}
            />
          </form>
        </div>
        <div className='container-photo'>
          {/* Aquí puedes poner tu foto, por ahora es un div rojo */}
        </div>
      </div>
    </div>
  );
}

export default Contact;