import React, {useState, useEffect} from 'react';
 // hooklar sayfaları optimize etmek için kullanılır.

const HooksUseEffect =()=>{

    const [mesaj, setMesaj]=useState('initial');
    const [num , setNum]=useState(1);

    useEffect(function(){ 
        console.log('Effect');
        var x=document.getElementById("div_1");
        console.log(x);
    },[mesaj,num]); // mesaj state i güncellenirse Effect fonk u çalışır

    return (
        <div>
            <h1>useEffect</h1>
            {mesaj}
            <button onClick ={
                ()=>{setMesaj('As');
                }
            }> Değiştir </button>

            {num};
            <button onClick={
                ()=>{setNum(5);
                }
            }>num Değiştir</button>
            <div id="div_1"></div>
        </div>
    )
}

export default HooksUseEffect;
 
//sayfanın render edildiğinden emin olmak istedgmizde useEffecti kullanmalıyız.
//effect function componnetlarda  life cycle oluşturur. Mounted, update, unmounted işlemlerini yakalar
//useEffect iki parametreli fonksiyondur.
//ilk parametre de bir fonks. sayfa her render edildiğinde veya update edildiğinde  bu fonk çalışır.
//state güncellenince componnet da güncellenir, effect fonk çalışır.
//component DidMount , DidUpdate çalıştı
//DidUpdate iki parametre döndürür (öceki props ve önceki state) 
//useEffect deger döndürmez.
//2. paremetre bir arraydir .arrayin içindeki degerler değiştiğinde Effect fonk(ilk parametre) çalıştırr
//Effect fonk sayfa ilk render edildgn de çalışır güncellmelerde arrayde degşklk olmazsa çalşmaz
//effect fonk u etkileyecek işlemleri 2. paremetre olan arrayın içine yazılırsa sayfa dah optimize olur.
