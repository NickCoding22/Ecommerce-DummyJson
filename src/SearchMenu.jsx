function SearchMenu(props) {
    return (
        <search>
            <form>
                <input 
                    type = "text"
                    onChange={(e) => props.setSearch(e.target.value)}
                />
                <nav id = "category-selector">
                    {props.categories.map((cat) => {
                        return (
                        <div className = "search-option" key = {cat}>
                            <label>{cat}</label>
                            <input 
                                type = "checkbox"
                                onChange={(e) => {
                                    let newFilters = props.filters.slice()
                                    if (props.filters.includes(cat)) {
                                        const index = newFilters.indexOf(cat);
                                        newFilters.splice(index, 1);
                                    } else {newFilters.push(cat)}
                                    props.setFilters(newFilters);
                                }}
                            />
                        </div>
                        )
                    })}
                </nav>
            </form>
        </search>
    )
}

export default SearchMenu;