import React, {useState, useLayoutEffect} from 'react';


const HooksUseLayoutEffect=(props)=>{
    const [mesaj, setMesaj]=useState('hi');

   
    useLayoutEffect(function(){
        setMesaj('UseLayoutEffect');
    })

    return (
        <div>
            <h1>UseLayoutEffect</h1>
            {mesaj}
        </div>
    )

}

export default HooksUseLayoutEffect;

//effecte benzer kullanım olarak
//UseLayoutEffect DOM işlemlerinde kullanılır
//useEffect olsaydı kısaca önce hi gösterr sonra useeffect i gösterrdi 
//useLayoutEffect olunca sanki içindeki deger initial degermiş gbi gösterr
//asenkron işlemlerde biraz daha hızlı çalışır useEffecte göre

//useEffect te sayfa tamamen render ediliğinde çalışıyor
//useLayoutState render sırasında çalışır


