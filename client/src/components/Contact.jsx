import React, { useState } from "react";
export default function Contact () {

  const [formData, setFormData] = useState({Name : "" , email: "" , phone: "", message: ""})

  function handleChange(event){
    setFormData(prevFormDFata =>{
      return {
        ...prevFormDFata,
        [event.target.name ] : event.target.value
      }
    })
  }


  function handleSubmit (event){
    event.preventDefault()
    //submittoAPI(formData)
    //test
    console.log(formData)
  }
    return (
        <section className="p-5 bg-light" id="Contact">
        <div className="container">
            <h2 className="text-center mb-5">Contact Me</h2>
            <form onSubmit={handleSubmit} className="w-50 container text-center">
                <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control"
                      id="floatingName" 
                      name="Name" placeholder="Name"
                      onChange={handleChange}
                      value={formData.Name}
                      />
                    <label htmlFor="floatingName">Name</label>
                  </div>
                <div className="form-floating mb-3">
                    <input 
                      type="email" 
                      className="form-control"
                      id="floatingEmail" 
                      name="email" 
                      placeholder="name@example.com"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    <label htmlFor="floatingEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="floatingPhone" 
                      name="phone" 
                      placeholder="Phone" 
                      onChange={handleChange}
                      value={formData.phone}
                    />
                    <label htmlFor="floatingPhone">Phone</label>
                  </div>
                  <div className="form-floating mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="exampleFormControlTextarea1" 
                      placeholder="Message" 
                      rows="3"
                      onChange={handleChange}
                      value={formData.message}
                      name="message"
                    />
                    {/* <input type="text" className="form-control custom-height" id="floatingMessage" placeholder="Message"/>
                    <label htmlFor="floatingMessage">Message</label> */}
                  </div>

                <button 
                className="btn btn-lg bg-warning"
                type="submit">Submit</button>
            </form>
        </div>
    </section>
    )
}