import Navigation from "../components/Navigation"

const DefaultLayout = ({children}) => {
    return (
        <div className="min-h-screen w-full">
            <Navigation/>
            <main className="bg-gray-100 h-full">
                {children}
            </main>
        </div>
    )
}

export default DefaultLayout
