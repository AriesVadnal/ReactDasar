import React, { useState, useEffect} from 'react';


const Hock = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title count: ${count}`
        return () => {
            document.title = 'React Hello world!'
        }
    })

    return (
        <div>
             <p>nilai yang di updata {count} </p>
             <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

export default Hock;