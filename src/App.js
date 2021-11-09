import React from 'react';
import HooksUseState from './hooks/hooksUseState';
import HooksUseEffect from './hooks/hooksUseEffect';
import HooksUseLayoutEffect from './hooks/hooksUseLayoutEffect';
import UnMount from './hooks/UnMount';


function App(){
    return (
        <div>
            <HooksUseState/>
            <HooksUseEffect/>
            <HooksUseLayoutEffect/>
            <UnMount/>
        </div>
    )
}

export default App;