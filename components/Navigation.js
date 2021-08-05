import Link from 'next/link'
const Navigation = () => {
    const ListItem = [
        {title: "Inicio", route: "/"},
        {title: "Mis pokemones", route: "/"},
        {title: "Contacto", route: "/"}
    ]
    return (
        <header className="w-full h-16 bg-blue-600">
                <nav className="max-w-screen-lg h-full mx-auto inset-x-0 flex justify-between items-center">
                    <img src={"/pokeapi_256.png"} className="object-contain h-12 " />
                    <ul className="flex gap-8 items-center">
                    {ListItem.map((item, idx) => (
                        <Link key={idx} href={item.route}>
                        <li className="font-medium text-white hover:bg-white hover:text-blue-600 px-3 py-1 rounded-lg transition cursor-pointer">{item.title}</li>
                        </Link>
                    ))}
                    </ul>
                </nav>
        </header>
    )
}

export default Navigation
