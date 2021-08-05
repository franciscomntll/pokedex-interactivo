import { useState } from "react"
import { api } from "../api"
import { SearchIcon } from "./icons"

const Search = ({ onClick }) => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <span className="w-full relative h-10">
            <input className="w-full h-10 py-1 pl-5 rounded-lg focus:outline-none focus:ring transition text-gray-500" placeholder="Buscar" type="text" onChange={handleChange} value={value} />
            <span onClick={onClick} className="absolute w-5 top-1/4 right-5 text-gray-300 hover:text-gray-500 transition cursor-pointer ">
                <SearchIcon />
            </span>
        </span>
    )
}

export default Search
