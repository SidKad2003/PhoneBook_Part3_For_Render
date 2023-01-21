import React from 'react'

function Setfilter({changingfilter, filtering}) {
    return (
        <div>Filter shown with: <input onChange={changingfilter} />
            <button onClick={filtering}>add</button></div>
    )
}

export default Setfilter