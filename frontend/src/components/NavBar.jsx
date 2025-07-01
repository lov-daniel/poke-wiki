import { Outlet } from "react-router"

const NavBar = () => {

    return (<>
    
        <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
        <a class="btn btn-ghost text-2xl">Poké Stop</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
        <li>
            <details>
            <summary>Pokémon</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
                <li><a>All Pokémon</a></li>
                <li><a>Pokémon by Generation</a></li>
                <li><a>Pokémon by Type</a></li>
            </ul>
            </details>
        </li>
        <li>
            <details>
            <summary>Trading Cards</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
                <li><a>All Cards</a></li>
                <li><a>Cards by Sets</a></li>
                <li><a>Cards by Rarity</a></li>
                <li><a>Cards by Type</a></li>
            </ul>
            </details>
        </li>
        <li><a>About</a></li>
        <li><a>FAQs</a></li>
        </ul>
    </div>
    </div>
    <Outlet/>
    
    </>)
}

export default NavBar