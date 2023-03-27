import React from 'react'
import { Link } from 'react-router-dom'
import './user.scss'

export const Users = () => {

  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    fetch(process.env.REACT_APP_URL + "/users")
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {
        user.length > 0 && <ul>
          {
            user.map(users => (
             <li key={users.id}>
               <Link to={"/users/" + users.id}>
                <p>{users.name}</p>
              </Link>
             </li>
            ))
          }
        </ul>
      }
    </div>
  )
}
