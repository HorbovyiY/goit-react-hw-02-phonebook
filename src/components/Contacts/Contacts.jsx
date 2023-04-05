export const Contacts = ({contacts, filter}) => { 
    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) => <li key={id}> {name}: {number }</li>
                ):
                contacts.map(({ id, name, number }) => 
                    <li key={id}> {name}: {number }</li>
                )
            }
        </ul>
    )
}