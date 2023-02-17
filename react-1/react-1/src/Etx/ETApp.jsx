import React, {useState} from 'react'
import ETForm from './ETForm';
import ETlist from './ETList';




const ETApp=()=>{
    const [track,settrack]=useState([]);

    return <>
    <ETForm track={track}  settrack={settrack}/>
    <ETlist track={track}/>
    </>;
}


export default ETApp