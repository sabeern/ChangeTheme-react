import React, { memo, useEffect, useState } from 'react';

function MemoTest({data}) {
    const [test, setTest] = useState(0);
    useEffect(() =>{
        console.log('I worked');
    })
  return (
<div><h1>{data} - {test}</h1>
<button onClick={()=>setTest(test+1)}>Click me</button>
</div>
  )
}

export default memo(MemoTest);