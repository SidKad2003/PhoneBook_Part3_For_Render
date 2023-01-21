import React from 'react'

function Add({addnew, changing, changingcontact}) {
    return (
        <div><form onSubmit={addnew}>
            <div>
                name: <input onChange={changing} />
            </div>
            <div>
                Contact: <input onChange={changingcontact} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form></div>
    )
}

export default Add