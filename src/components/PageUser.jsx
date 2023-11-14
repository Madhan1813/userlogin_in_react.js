// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import styles from './HomePage.module.css'

// const PageUser = () => {
//   let [mydata, setMyData] = useState([])

//   useEffect(() =>{
//     axios.get("http://localhost:3000/Users")
//     .then((y) => {
//       setMyData(y.data)
//       console.log("done");
//     })
//     .catch(() => {
//       console.log("error");
//     })
//   }, [])
//   return (
//     <div>
      
//       {mydata.map((x) => {
//         console.log("working good");
//         return(
//           <section className={styles.userpage}>
//             <div className={styles.card}>
//               <form action="">
//                 <label htmlFor="">Name:</label><br />
//                 <input type="text" value={x.username}/><br />
//                 <label htmlFor="">Mail</label><br />
//                 <input type="text" value={x.mail}/>
//             </form>
//             </div>
//           </section>
//         )
//       })}
//     </div>
//   )
// }

// export default PageUser



import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './HomePage.module.css'

const PageUser = () => {
  let [user, setUser] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:3000/Users")
    .then((recieve) => {
      setUser(recieve.data)
      console.log("data recieved successfully!!!");
    })
    .catch(() => {
      console.log("Error while recieving data.");
    })
  }, [])

  // const mveto = useNavigate();

  // const handleEditClick = (x) => {
  //   mveto(`/edituser/${x.id}`);
  // }
  return(
    <div>
      {user.map((x) => {
    return (
      <section className={styles.userpage}>
        <div className={styles.card}>
          <h3>User details:</h3>
          <form action="">
            <div className={styles.getuserdet}>
              <input type="text" placeholder='UserName' value={x.username}/>
            </div>
            <div className={styles.getuserdet}>
              <input type="text" placeholder='MailId' value={x.mail}/>
            </div>
            <div className={styles.btns}>
              {/* <input type="submit" value='Edit' className={styles.edt} onClick={handleEditClick}/>  */}
              <Link to = {`/edituser/${x.id}`} id= {styles.links}>Edit</Link><br />
              <input type="submit" value='Delete' className={styles.dlt}/>            
            </div>
          </form>
        </div>
      </section>
    )
  })}
    </div>
)
}
export default PageUser