import airbnbLogo from '../images/airbnb_logo.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={airbnbLogo} alt="dope logo"/>
        </nav>
    )
}