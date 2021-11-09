import React, {useState, useEffect} from 'react'

const Child =()=>{
    useEffect(
        () =>  { console.log('child Component') 

        return () =>{
            console.log ('UnMount');
        }
    // ilk render mount işleminde useEffect işlemi çalıştı 
    //ikincisinde unmount çalıştı
      }
    )
    return (
        <div>
            <h1>Child</h1>
        </div>
    )
}

const UnMount = (props)=>{
    const [isShow, setIsShow]=useState(false);
    const onToggle =()=>{
        setIsShow (!isShow);
    }

    return (
        <div>
            <h2>UnMount</h2>
            {
                isShow && <Child/>
            }
            <button onClick = {() => { onToggle() }}>Toggle</button>
        </div>
    );
}

export default UnMount;

// isShow true ise child ı return et 
