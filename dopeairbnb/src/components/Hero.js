import photoGrid from '../images/photo_grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-photo" src={photoGrid} alt="photo grid of course lol"/>
            <h1 className="hero-header">Why use AirBnB if you have this dope alternative?!</h1>
            <p className="hero-text">All the awesome experiences of people around the world, finally, in one platform wowsuch</p>
        </section>
    )
}