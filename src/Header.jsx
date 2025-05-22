import './App.css'

const Header = () => {

    return (
            <header className="flex justify-between w-full fixed top-0 items-center bg-[#008d38] pt-4 pb-4 pr-45 pl-45 text-white">
            <h1 className="text-white">Green Protocol</h1>
            <nav className=" w-[35%]"> 
                <ul className=" flex justify-between">
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="">Solution</a></li>
                    <li><a href="">Bussiness Model</a></li>
                    <li><a href="">Profit Distribution</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header