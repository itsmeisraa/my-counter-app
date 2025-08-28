import React, { useState } from 'react';

function Here() {
  const [counter, setCounter] = useState(0);
  return (
    <>
    <div className='card'>
     <h2>Counter App</h2>
     <span className='h4'>
     <h4>
        {counter}
     </h4>
     </span>
     <span className='try'>
      <button  className="up" onClick={() => setCounter(counter + 1)}>
        Click to add
      </button>
      <button className='zero' onClick={() => setCounter(0)}>click to set 0</button>
      <button className="down" onClick={ () => setCounter(counter - 1)}>click to sub</button>
      </span>
    </div>
    </>
  );
}

export default Here;
