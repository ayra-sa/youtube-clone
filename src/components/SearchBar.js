import React, {useState} from 'react'

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = event => setSearchTerm(event.target.value)
    const handleSub = (e) => {
        e.preventDefault()
        onSubmit(searchTerm)
    }
    
    const onKeyPress = event => {
        if (event.key === 'Enter') {
            onSubmit(searchTerm)
            event.preventDefault()
        }
        console.log(event.target)
    }
    return (
        <div className='search-bar'>
            <form onSubmit={handleSub}>
                <input 
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder='Search'
                    onKeyPress={onKeyPress}
                    type='search'
                />
                <button type='submit'>Go</button>
            </form>
        </div>
    )
}

export default SearchBar
