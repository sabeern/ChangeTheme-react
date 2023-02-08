import React, { useState, useCallback } from 'react';
import List from './components/List';
function App() {
    const [num ,setNum] = useState(0);
    const [theme, setTheme] = useState('yellow');
    const changeTheme = ()=> {
        if(theme === 'yellow') {
            setTheme('green');
        }else {
            setTheme('yellow');
        }
    }
    const getItems = useCallback(() => {
        if(num || num===0) {
            return [num, num+1, num+2];
        }else {
            return [];
        }
    },[num]);
    return(
        <div style={{background:theme,paddingBottom:'30px'}}>
            <input type="text" onChange={(e)=>setNum(parseInt(e.target.value))}/><br/>
            <button onClick={changeTheme}>change Theme</button>
            <List getItems={getItems}></List>
        </div>
    )
}

export default App;
