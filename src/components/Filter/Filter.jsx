export const Filter = ({ text, toFilter }) => { 
    return (
        <div>
            <span>Find contacts by name</span>
            <input
                type="text"
                value={text}
                onChange={(e) => {toFilter(e.currentTarget.value) }}
            />
        </div>
    )
}
