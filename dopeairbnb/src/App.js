import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from './components/Card'

import data from './data'

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                id={card.id}
                title={card.title}
                description={card.description}
                coverImg={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                price={card.price}
                openSpots={card.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className="card-list">
                {cards}
            </div>
        </div>
    )
}