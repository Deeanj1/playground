import React, { useState } from 'react'

const Contact = () => {
  const [myname, setmyname] = useState("");
  const [myemail, setmyemail] = useState("yourname@gmail.com");
  const [mybio, setmybio] = useState("I love...");
  const [users, setusers] = useState([]);

  const submitdata = (e) => {
    e.preventDefault();
    setusers([...users, { myname, myemail, mybio }]);
    setmyname("");
    setmyemail("yourname@gmail.com");
    setmybio("I love...");
  }

  return (
    <div className=" min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Contact page</h1>
      <section>
        <main>
          <form className='flex flex-col max-w-[500px] mx-auto gap-4 ' onSubmit={submitdata}>
            <input
              type="text"
              placeholder="Enter your name"
              value={myname}
              onChange={(e) => setmyname(e.target.value)}
              className="p-3 rounded bg-gray-900 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={myemail}
              onChange={(e) => setmyemail(e.target.value)}
              className="p-3 rounded bg-gray-900 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Enter your Bio"
              value={mybio}
              onChange={(e) => setmybio(e.target.value)}
              className="p-3 rounded bg-gray-900 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Submit
            </button>
          </form>
        </main>
        <main className='flex flex-wrap justify-center mt-8'>
          {users.map((data, index) => (
            <div className='bg-blue-900 max-w-80 p-8 m-4 rounded shadow text-white' key={index}>
              <h1><b>Name:</b> {data.myname}</h1>
              <i><b>Email:</b> {data.myemail}</i>
              <p><b>Bio:</b> {data.mybio}</p>
            </div>
          ))}
        </main>
      </section>
    </div>
  )
}

export default Contact