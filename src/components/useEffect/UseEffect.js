// import React, { useState, useEffect } from "react";
// import './UseEffect.css';

// const UseEffect = () => {
//     const [state, setState] = useState(0);
//     const [state2, setState2] = useState(0);

//     useEffect(() => {
//         window.alert(`useEffect called`);
//     }, [state]);
//     console.log(`from function body`);
//     return (
//         <div>
//             {/* {console.log(`inside jsx`)} */}
//             <button onClick={() => { setState(state + 1) }}>Click Me{state}</button>
//             <button onClick={() => { setState2(state2 + 1) }}>Click Me{state2}</button>

//         </div>
//     )
// };

// export default UseEffect;


import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        console.log("add event");
        window.addEventListener("resize", actualWidth);

        return () => {
            console.log("remove Event");
            window.removeEventListener("resize", actualWidth)
        }
    })
    return (
        <div>
            <p>
                The actual size of window is :
            </p>
            <h2>{widthCount}</h2>
        </div>
    )
}

export default UseEffect


// import React, { useState, useEffect } from 'react'

// const UseEffect1 = () => {
//     const [state, setState] = useState(1);
//     useEffect(() => {
//         const asyncFun = async () => {
//             const fetchApi = await fetch(`https://dummyjson.com/products/${state}`);
//             const data = await fetchApi.json();
//             setState(data);
//         };
//         asyncFun();
//     }, [state]);
//     return (
//         <div>
//             <button onClick={() => setState(state + 2)}>Clicked to get data{state}</button>
//         </div>
//     )
// }

// export default UseEffect1