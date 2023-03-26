import React from 'react'

export const Users = () => {

    const [users, SetUsers] = React.useState([])
    React.useEffect(() => {
        fetch(process.env.REACT_APP_URL+"/users")
        .then(res => res.json())
        .then(data => SetUsers(data))
        .catch(err => console.error(err))
    }, [])

  return (
    <>
    <h1>Users</h1>

    {
        users.length > 0 && <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))
            }
        </ul>
    }
    </>
  )
}
