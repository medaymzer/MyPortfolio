
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => { 


    const [formData,setFormData]=useState({
        from_name : '',
        from_last : '',
        from_mail : '',
        subject : '',
        message: ''
    })
    const form = useRef() ;

    const handlechange = (e) => {
        const {name,value}=e.target;
        setFormData({
            ...formData,[name] : value
        })
    }
    const verifyEmail = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.from_name.trim()){
            validationErrors.from_name="Name is required"
        }
        if(!formData.from_last.trim()){
            validationErrors.from_last="Last name is required"
        }
        if(!formData.from_mail.trim()){
            validationErrors.from_mail="Email is required"
        }
        if(!formData.subject.trim()){
            validationErrors.subject="Subject is required"
        }
        if(!formData.message.trim()){
            validationErrors.message="Message is required"
        }

        if (Object.keys(validationErrors).length == 0){
            sendEmail(e)
        }else{
            alert("Veuillez remplir tout les champs car ils sont obligatoire !")
        }
     }

    const sendEmail = (e) => { 
        
        emailjs.sendForm('service_lqkgzum','template_dy1z5zw',form.current,{
            publicKey:'lIuXKUphRSHCIHHVe'
        })
        .then(
            ()=>{
                console.log('SUCCESS!')
              e.target.reset()
                window.alert("thank you for contacting me , i will get back to you soon ! ")
            },
            (error)=>{
                console.log('Failed',error.text)
            }
        )
     }


    return(
        <div className="contact_container">
            <div className="contact_text">
                <h2>Contactez-moi</h2>
                <p>Je serai ravi de vous lire </p>
                <h4>Téléphone</h4>
                <h5>05 55 06 90 61</h5>
                <h4>E-mail</h4>
                <h5>hamza_zer@outlook.fr</h5>

            </div>
            <div className="contact_form">
            <form ref={form} onSubmit={verifyEmail} id='formform'>
        <p>
          <label for="">Prénom</label>
          <input type="text" name='from_name' placeholder='Ecrit ton prénom' onChange={handlechange}/>
         
        </p>
        <p>
          <label for="">Nom</label>
          <input type="text" name='from_last' placeholder='Ecrit ton nom' onChange={handlechange}/>
        </p>
        <p>
          <label for="">Adresse mail</label>
          <input type="text" name='from_mail' placeholder='Ecrit ton adresse mail'onChange={handlechange}/>
        </p>
        <p>
          <label for="">Sujet</label>
          <input type="text" name='subject' placeholder='Ecrit ton sujet'onChange={handlechange}/>
        </p>
        <p>
          <label for="">Message</label>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Ecrit ton message'onChange={handlechange}></textarea>
        </p>
        <p className='subsub'>
          <input type="submit" value="Envoyer" id='sub' />
        </p>
      </form>
            </div>
        </div>
    )
 }
 export default Contact