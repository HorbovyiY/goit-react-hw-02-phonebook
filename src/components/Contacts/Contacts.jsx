export const Contacts = ({contacts, filter, del}) => { 
    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) =>
                        <li key={id}>
                            {name}: {number}
                            <button type="button" onClick={()=>{del(id)}}>Delete</button>
                        </li>
                ):
                contacts.map(({ id, name, number }) => 
                    <li key={id}>
                        {name}: {number}
                        <button type="button" onClick={()=>{del(id)}}>Delete</button>
                    </li>
                )
            }
        </ul>
    )
}