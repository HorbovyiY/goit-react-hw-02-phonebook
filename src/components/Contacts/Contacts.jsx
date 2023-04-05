export const Contacts = ({contacts, filter}) => { 
    return (
        <div>
            <h2>Contacts</h2>
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
        </div>
    )
}