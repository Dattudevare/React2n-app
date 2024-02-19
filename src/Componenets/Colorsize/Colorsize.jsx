import React, { useState } from 'react';
import './Colorsize.css'
import { getValue } from '@testing-library/user-event/dist/utils';

function Colorsize() {
    const [fsize, setFsize] = useState("50px")



    function getValue(e) {
        let size = e.target.value + 'px';
        console.log(size)
        setFsize(size)
    }
    let colorChange = (e) => {
        let col = e.target.value
        console.log(col)
        setFsize(col)
    }
    return (
        <>

            <div className='doone'></div>



            <h1 className='text-center'>font Size Changer</h1>



            <h2 style={{ fontSize: fsize, color: fsize }}>Cnc web world</h2>

            <input type="range" name='reange' onClick={getValue} />
            <input type="color" name='color' onChange={colorChange} />

        </>
    )
}

export default Colorsize