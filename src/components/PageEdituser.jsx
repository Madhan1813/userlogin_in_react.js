import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './HomePage.module.css'



const Edituser = () => {

    let [username, setUsername] = useState("")
    let [mail, setMail] = useState("")

    let nav = useNavigate()


    let {abc} = useParams();
    console.log(abc);

    let nameData = (e) => {
      setUsername(e.target.value)
  }

  let mailData = (e) => {
      setMail(e.target.value)
  }

    useEffect(() => {
      axios.get(`http://localhost:3000/Users/${abc}`)
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.username)
        setMail(response.data.mail)
      })
      .catch(() => {
        console.log("Error");
      })
    }, [abc])

    
    let updatedata = (e) => {
      e.preventDefault()
      let payload = {username, mail}
      axios.put(`http://localhost:3000/Users/${abc}`, payload)
      .then(() => {
        console.log("data has been updated");
      })
      .catch(() => {
        console.log("er");
      })
      nav("/user")
    }
  return (

    <div className={styles.editmain}>
        <div className={styles.pCard}>
            <form action="">
              <h3>user update...</h3>
              <label>Name</label>
              <input type="text" value={username} onChange={nameData}/><br />
              <label>Salary</label>
              <input type="text" value={mail} onChange={mailData}/><br />
              <button onClick={updatedata} className={styles.eBtns}>Update_data</button>
            </form>
          </div>
    </div>
  )
}

export default Edituser

// useParams() - is used to get the data from the url(website url).
// axios - is same like that but fetch from database url.

// Here the axios.put() has takes 2 arguments, 1st one is where to update.
// 2nd one is what to update.