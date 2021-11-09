import React, {useState} from 'react';


const HooksUseState =() =>{
    const [count, setCount]=useState(0);
    const [mesaj, setMesaj]=useState('hi');
    return (
        <div>
            <h1>usestate</h1>
            <h4>Count: {count} </h4>
            <div>
                <button onClick ={()=> setCount(count+1)}>Arttır</button>
            </div>

            <h1>{mesaj}</h1>
            <div>
                <button onClick ={()=>setMesaj('mesaj değişti')}>Değiştir</button>
            </div>

        </div>
    );
}

export default HooksUseState;
