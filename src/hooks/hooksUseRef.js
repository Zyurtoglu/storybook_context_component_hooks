import React, {useRef} from 'react';


const HooksUseReff = () => {
    const inputRef = useRef();
    function handleClick(e) {
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

export default HooksUseReff;


//refler dom elemanına yada react render metodu içerisnde oluşturulan ögelere erişmeyi sağlar.
//createRef her render işleminde yeni bir ref döndürürken, useRef her render işleminde aynı ref’i döndürür.