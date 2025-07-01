import React, { useState } from 'react';

const Home = () => {
  const [mycounter, setmycounter] = useState(4);
  const [toggle, settoggle] = useState(false);

  const increasecount = () => {
    setmycounter(mycounter + 1);
  };
  const decreasecount = () => {
    setmycounter(mycounter - 1);
  };

  const togglebox = () => {
    settoggle (!toggle);
  };

  return (
    <div>
      <div>This is the Home page</div>
      <h1 className='text-xl my-2'>
  Your state value is: {toggle ? Math.sqrt(mycounter) : mycounter}
</h1>
      <div className="gap-2 flex">
        <button onClick={increasecount}> Increase </button>
        <button onClick={decreasecount}> Decrease </button>
        <button onClick={togglebox}>
         {''} {toggle ? 'Hide Sqrt' : 'Show Sqrt'}{''}
        </button>
      </div>

    {toggle ? null : (
       <div className='my-10 p-20 bg-amber-300 text-center w-80 flex items-center'>
        <h2>This is the final count:</h2>
        <h1> {Math.pow(mycounter, 2)}</h1>
       </div>
       )}
    </div>
  );
};

export default Home;