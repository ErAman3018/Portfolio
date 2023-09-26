import React,{useState , useRef} from 'react'
import emailjs from "@emailjs/browser";
// import Contact data
import { contact } from '../data'

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [service,setSubject] = useState("");
    const[message,setMessage]= useState("");

    const validateEmail=(email)=>{
        return email.endsWith("@gmail.com");
      }
      const handleName=(e)=>{
        setName(e.target.value);
      };
      const handleEmail=(e)=>{
        setEmail(e.target.value);
      };
      const handleSubject=(e)=>{
        setSubject(e.target.value);
      }
      const handleMessage=(e)=>{
        setMessage(e.target.value);
      }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateEmail(email)){
          toast.error("Please Enter a valid Email (Ending With @gmail.com)");
          return
        }
        
        else{
          emailjs.sendForm('service_dhi8vl4', 'template_6uownnj', form.current, 'fQoHleNa__85rWbql')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          toast.success("Thanks for contacting us, We'll get in touch with you shortly");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          
        }
      };


  return (
    <section className='section bg-primary' id='contact'>
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center mb-2">
            <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40  before:hidden before:lg:block">
                {/* <Link to='contact'>Contact me</Link> */}Contact me
            </h2>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            {/* info */}
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                {contact.map((item, index)=>{
                    const {icon,title, subtitle,description}=item;
                    return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                        <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                            {icon}
                        </div>
                        <div>
                            <h4 className='font-body text-xl mb-1'>{title}</h4>
                            <p className='mb-1'>{subtitle}</p>
                            <p className='text-accent font-normal'>{description}</p>
                        </div>
                    </div>
                })}
            </div>

            {/* form */}
            <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
                <div className="flex gap-8">
                    <input type="text" onChange={handleName} name='name' value={name} className='input' placeholder='Your name' />
                    <input type="email" onChange={handleEmail} name='email'value={email} className='input' placeholder='Your mail' />
                </div>
                <input type="text" name='Subject' onChange={handleSubject} value={service} className="input" placeholder='Subject'/>
                <textarea className='textarea' onChange={handleMessage} value={message} name='message' placeholder='Your Message'></textarea>
                <button type='submit' className='btn btn-lg bg-accent hover:bg-accent-hover'> Send Message</button>
            </form>
            <ToastContainer />
        </div>
      </div>
    </section>
  )
}

export default Contact
