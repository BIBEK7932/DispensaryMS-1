import React, { useState } from 'react'
import Afterbar from '../Navbar/Afterbar'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import { useLocation } from 'react-router-dom'
const Afterloginuser = () => {
  const location = useLocation()
  const name = location.state && location.state.name
    const [post,setPost] = useState({
        fname:"",
        lname:"",
        address:"",
        phone:""
    })
    const submitForm = async(event) =>{
        event.preventDefault()
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            console.log(post)
            const res = await axios.post("http://localhost:5050/doctor/book-data",post,config);
            if(res.data.success)
            {
                toast.success("Submitted succesfuuly")
            }
        } catch (error) {
            console.log("Error from the book from" + error)
        }
    }
    const handleInput = (event) =>{
        setPost({...post,[event.target.name]:event.target.value})
    }
  return (
    <div>
        <ToastContainer/>
        <Afterbar name={name}/>
        <header>
        
        <div className="section__container header__container">
          <div className="header__content">
            <h1>Providing an Exceptional Patient Experience</h1>
            <p>
              Welcome, where exceptional patient experiences are our priority.
              With compassionate care, state-of-the-art facilities, and a
              patient-centered approach, we're dedicated to your well-being. Trust
              us with your health and experience the difference.
            </p>
            <button className="btn">See Services</button>
          </div>
          <div className="header__form">
            <form onSubmit={submitForm}>
              <h4>Book Now</h4>
              <input type="text" placeholder="First Name"  name='fname' onChange={handleInput}/>
              <input type="text" placeholder="Last Name" name='lname' onChange={handleInput}/>
              <input type="text" placeholder="Address" name='address' onChange={handleInput}/>
              <input type="text" placeholder="Phone No." name='phone' onChange={handleInput}/>
              <button className="btn form__btn" type='submit'>Book Appointment</button>
            </form>
          </div>
        </div>
      </header>
      
    </div>
  )
}

export default Afterloginuser
