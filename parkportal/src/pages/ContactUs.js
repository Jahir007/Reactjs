import React from 'react'
import emailjs from "emailjs-com";

const ContactUs = () => {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_cjvx6ko', 'template_3gjqon6', e.target, 'user_OrivuLJTs5Jgqya26geHD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (

    <>

      {/* Contact Us Form */}

      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title d-flex justify-content-center align-item-center'>
                  Get In Touch</div>
                <div>
                  <div className="container">
                    <form onSubmit={sendEmail}>
                      <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs