import React from 'react';
import HooksUseState from './hooks/hooksUseState';
import HooksUseEffect from './hooks/hooksUseEffect';
import HooksUseLayoutEffect from './hooks/hooksUseLayoutEffect';
import UnMount from './hooks/UnMount';
import HooksUseRef from './hooks/hooksUseRef';


function App(){
    return (
        <div>
            <HooksUseState/>
            <HooksUseEffect/>
            <HooksUseLayoutEffect/>
            <UnMount/>
            <HooksUseRef/>
        </div>
    )
}

export default App;