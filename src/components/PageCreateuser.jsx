import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import axios from 'axios';
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

const PageCreateuser = () => {
  useEffect(() => {
    // Create a new link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';

    // Append the link element to the head of the document
    document.head.appendChild(link);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); 

  let [username, setUsername] = useState("")
  let [mail, setMail] = useState("")
  
  let usernameData = (e) => {
    setUsername(e.target.value)
    console.log(e.target.value);
  }
  let mailData = (e) => {
    setMail(e.target.value)
  }

  

  let adduser = () => {
    let add = {username, mail}

    axios.post("http://localhost:3000/Users", add)
    .then(()=>{
      console.log("user created sucessfully");
    })
    .catch(()=>{
      console.log("Error during creating users Profile");
    })
  }
  return (
    <section className={styles.sec}>
      <div className={styles.mainpage}>
      <h1>Login</h1>
        <form action="">
          <div className={styles.inputbox}>
            <input type="text" placeholder="UserId" required  value={username} 
              onChange={usernameData}/>
            <i class='bx bxs-user'></i>
          </div>
          <div className={styles.inputbox}>
            <input type="mail" placeholder="Mail_Id" required  value={mail} onChange={mailData}/>
            <i class='bx bxs-envelope'></i>
          </div>
          <div className={styles.inputbox}>
            <input type="password" placeholder="Password" />
            <i class='bx bxs-lock-alt'></i>
          </div>
          <div className={styles.remember_forget}>
            <label for="">
              <input type="checkbox" value="" /> Remember me
            </label>
            <a href="#">Forgetpassword</a>
          </div>
          <button type="submit" className={styles.btn} onClick={adduser}>Login</button>
          <div className={styles.register_link}>
            <p>Don't have an account? <a href="#">Register Here</a></p>
          </div>
        </form>
  </div>
    </section>
    
  )
}

export default PageCreateuser

// In this code, we use the useEffect hook to create a new <link> element and append it to the head of the document. This will load the external CSS file when the component is mounted. We also include a cleanup function to remove the link element when the component is unmounted to avoid memory leaks.