
import React, { useState } from 'react'

const Contact = () => {
  const [myname, setmyname] = useState("");
  const [myemail, setmyemail] = useState("");
  const [mybio, setmybio] = useState("I am a new user");
  const [users, setusers] = useState([]);

  console.log(users);

  const submitdata = (e) => {
    e.preventDefault();
    setusers([...users, {  myname,  myemail,  mybio }]); 
    setmyname("");
    setmyemail("");
    setmybio("I am a new user");
    
  }

  console.log(myname, myemail, mybio);
  

  return (
    <div>

      <h1>This is the Contact page</h1>
      <section>
        <main >
          <form className='flex flex-col max-w-[500px]' onSubmit={submitdata}>
            <input type="text" placeholder="Enter your name" value={myname} onChange={(e) => setmyname(e.target.value)} />
            <input type="email" placeholder="Enter your email" value={myemail} onChange={(e) => setmyemail(e.target.value)} />
            <textarea type="bio" placeholder="Enter your Bio" value={mybio} onChange={(e) => setmybio(e.target.value)} />
            <button type="submit">  submit </button> 
          </form>
        </main>
        <main className='flex flex-wrap'>
         {users.map((data, index) => (
          <div className='bg-amber-300 max-w-80 p-12 m-6' key={index}>
            <h1> <b>Name:</b> {data.myname} </h1>
            <i> <b>Email:</b> {data.myemail} </i>
            <p> <b>Bio:</b> {data.mybio} </p>
          </div>
         ))}
        </main>
      </section>
      
      </div>
  )
}

export default Contact