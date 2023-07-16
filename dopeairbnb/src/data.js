import swimmerImage from './images/swimmer.png'
import weddingImage from './images/wedding.png'
import bikeImage from './images/bike.png'

const data = [
    {
        id: 1,
        title: "Don't Drown",
        description:
            'I will share with you what I call "Swimming Advices" so you will not die!',
        price: 136,
        coverImg: swimmerImage,
        stats: {
            rating: 5.0,
            reviewCount: 6,
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Dancing & Shooting",
        description:
            "IShoot with the camera, not with real guns - Become a professional photographer today!",
        price: 125,
        coverImg: weddingImage,
        stats: {
            rating: 5.0,
            reviewCount: 30,
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Don't Ride Alone",
        description:
            "Being alone is so sad, why keep doing this if you can bike with some amazing people out there!",
        price: 50,
        coverImg: bikeImage,
        stats: {
            rating: 4.8,
            reviewCount: 2,
        },
        location: "Norway",
        openSpots: 10,
    },
];

export default data;