import React from "react";
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form";

//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Task1.css";

   function Task1(){
    const { 
      register, 
      handleSubmit, 
      reset, 
      formState: { errors } 
  } = useForm({mode:"onChange"});
    
   const[submittedData, setSubmittedData]=useState([]);
   
    const handleChange=(e)=>
    {
         setFormData({...formData, [e.target.name]: e.target.value});
    };

     
  
      const onSubmit=(data)=>
        {
           
            setSubmittedData([...submittedData, data]);
            reset();
        };

      return (
       
        <div className="container">
            {/*Navbar with Home, About, Contact */}
            <nav className="navbar">
             <h1>React Form with table</h1>
             <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
             </ul>
            </nav>

            {/*Form Section*/}
            <div className="form-container">
                <h2>Input Form</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="First Name" {...register("firstName",{required:"First name is required", pattern:{value:/^[A-Za-z]+$/, message:"First name should not contain numbers"}})}/>
                    {errors.firstName && <span className="error">{errors.firstName.message}</span>}

                    <input type="text" placeholder="Last Name" {...register("lastName", {required:"Last name is required", pattern:{value:/^[A-Za-z]+$/,message:"Last name should not contain numbers"}})} />
                    {errors.lastName && <span className="error">{errors.lastName.message}</span>}

                    <input type="email" placeholder="Email" {...register("email", {required:"Email is required", pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email format"}})}/>
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <input type="text" placeholder="Phone Number" {...register("phone", {required:"Phone number is required ", pattern:{value: /^\d{10}$/, message:"Phone number should be exactly 10 digits and contain only numbers"}})}/>
                    {errors.phone && <span className="error">{errors.phone.message}</span>}

                    <input type="text" name="address" placeholder="Address" {...register("address", {required:"Address is required"})}/>
                    {errors.address && <span className="error">{errors.address.message}</span>}
                    <button type="submit" className="submit-button">Submit</button>

                    
                 </form>
            </div>
                      
            {/*Table Section */}
            <div className="table-container">
                <h2>Submitted Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index)=>
                        (
                             <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td>
                             </tr>
                        ))}
                    </tbody>
                </table>
            </div>

         {/*Footer */}
          <footer className="footer">
            <p>&copy; 2025 My React App</p>
            
             <div className="social-icons">

              <a href="#">
               <FontAwesomeIcon icon={faFacebook}/>
                </a>

                <a href="#">
                <FontAwesomeIcon icon={faTwitter}/>
                </a>

                <a href="#">
                <FontAwesomeIcon icon={faInstagram}/>
                </a>
             </div>

          </footer>


        </div>

           
      );
   }

  
      export default Task1;
               
             