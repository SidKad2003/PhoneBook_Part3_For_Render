import React from 'react'

function Display({persons, show}) {
    return (
        <div><h2>Numbers</h2>
            {/* {persons.map((value) => <li>{value.name} :  {value.contact}</li> */}
            {persons.map((value) => <li>{value.id}: {value.name} :  {value.number}</li>

            )}
            <h2>Filtered</h2>
            {show.map((value) => <li>{value.name} :  {value.contact}</li>
            )}</div>
    )
}

export default Display