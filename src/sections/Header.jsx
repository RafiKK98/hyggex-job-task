import Hy2 from "../assets/Hy2.png";

const Header = () => {
    return (
        <section className="navbar px-0 pt-7 mb-14">
            <div className="flex-1">
                <img src={Hy2} className="" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><a className="text-lg font-normal">Home</a></li>
                    <li><a className="text-lg font-normal">Flashcard</a></li>
                    <li><a className="text-lg font-normal">Contact</a></li>
                    <li><a className="text-lg font-normal">FAQ</a></li>
                    <li><a className="text-lg font-normal text-white px-10 bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-3xl">Login</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Header