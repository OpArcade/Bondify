import React from 'react'
import Home from './_components/Home'

interface User{
  id: number;
  name: string;
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users' ,
    {
      next : {revalidate: 10}
    }
  );

  const users: User[] = await res.json();

  return (
    <div>
      <h1>about us page </h1>
      <h2>users list on about us page</h2>
      <ul>
        {users.map(user =>
          <li key={user.id}> {user.id} {user.name}</li>
         )}
      </ul>

{/* <Home/> */}
    </div>
  )
}

export default page
