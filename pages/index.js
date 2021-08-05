import { data } from "autoprefixer"
import axios from "axios"
import { memo, useEffect, useState } from "react"
import { api } from "../api"
import { ArrowIcon } from "../components/icons"
import Search from "../components/Search"

const index = () => {
    const [data, setData] = useState([])
    const handleClick = () => {
        
    }

    const getPokemon = async () => {
        try {
            const res = await api.fetchPokemon()
            const { data } = res
            setData(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <section className="max-w-screen-lg mx-auto inset-x-0 py-10 relative h-max">
            <div className="flex w-full justify-between gap-10">
                <h1 className="font-bold text-blue-600 text-3xl">¡Encuentra a tu pokemon favorito!</h1>
                <Search onClick={handleClick} />
            </div>
            <div className="py-10">
            <div className="grid grid-cols-4 gap-6 w-full min-h-screen">
                {data.map((item, idx) => (
                    <PokemonCard key={idx} data={item} />
                ))}
            </div>
            <button className="bg-gray-200 p-6 rounded-full hover:bg-gray-500 transition absolute text-gray-500 hover:text-white top-1/3 -right-10 transform translate-x-full"><ArrowIcon className="w-10 h-10 transition"/></button>
            <button className="bg-gray-200 p-6 rounded-full hover:bg-gray-500 transition absolute top-1/3 -left-10 transform text-gray-500 hover:text-white -translate-x-full"><ArrowIcon className="w-10 h-10  transition rotate-180 transform" /></button>
        </div>


        </section>
    )
}

export default index




const PokemonCard = memo(({ data }) => {
    const [pokemon, setPokemon] = useState()
    const { url } = data

    const fetchData = async () => {
        try {
            const {data} = await axios.get(url)
            console.log(data)
            const NewPokemon = {
                id: data?.id,
                name: data?.name,
                image : data?.sprites?.front_default,
                types: data?.types,
                stats: data?.stats
            }
            setPokemon(NewPokemon)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="bg-white shadow-lg rounded-xl hover:scale-105 transition hover:-rotate-3 transform h-full w-full flex flex-col items-center justify-center py-6">
            <h2 className="capitalize text-gray-700 text-center text-lg">{pokemon?.name}</h2>

                <img className="object-contain w-32 px-2" src={pokemon?.image} />
                <div className="gap-2 w-full flex flex-wrap items-center justify-center">
                    {pokemon?.stats?.map((item, idx) => (
                        <Feature key={idx} data={item}/>
                    ))}
                </div>
        </div>
    )
})


const Feature = ({data}) => {
    const {stat, base_stat} = data
    const colors = {
        hp: "bg-green-500",
        attack : "bg-red-500",
        defense: "bg-blue-500",
        "special-attack" : "hidden",
        "special-defense" : "hidden",
        speed: "bg-purple-500"

    }
    return (
        <div className={`${colors[stat?.name]} py-0.5 px-1 w-max rounded`}>
            <p className="text-xs text-white capitalize">{stat?.name} {base_stat}</p>
        </div>
    )
}

