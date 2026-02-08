import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise)
  const [users, setUsers] = useState(initialUsers)
  console.log(users)

  const handleAddUser = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }
    console.log(user)

    // create user in the server
    fetch('http://localhost:9000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(`data after post `, data)
        const newUsers = [...users, data]
        setUsers(newUsers)
        form.reset()
      })
  }

  // create user in the server
  // fetch('http://localhost:9000/users', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(user)
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('new user form server ', data)
  //   })

  return (
    <div>
      <form onSubmit={handleAddUser} className='card'>
        <input name="name" type="text" /> <br />
        <input name="email" type="email" /> <br />
        <input type="submit" value="Add user" />
      </form>

      <div>
        {
          users.map(user => <p className='card' key={user.id}>Name : {user.name} <br /> Email : {user.email}</p>)
        }
      </div>
    </div>
  );
};

export default Users;