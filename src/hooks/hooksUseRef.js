import React, {useRef} from 'react';


const HooksUseRef = () => {
    const inputRef = useRef();
    function handleClick(e) {
        document.getElementById('myInput');
        console.log(inputRef.current);
    }
  return (
     <div>
        <div>UseRef </div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>
    </div> 
  );
}

export default HooksUseRef;


//refler dom elemanına yada react render metodu içerisnde oluşturulan ögelere erişmeyi sağlar.
//createRef her render işleminde yeni bir ref döndürürken, useRef her render işleminde aynı ref’i döndürür.