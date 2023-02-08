import React, { useEffect, useState } from "react";

function List({getItems}) {
    const [item, setItem] = useState();
    useEffect(()=> {
        console.log('I worked')
        setItem(getItems());
    },[getItems]);
    return(
        <>
       {item && item.map((val, idx)=> {
            return(<p key={idx}>{val}</p>)
        })}
        </>
    );
}

export default List;