const articlesArray = [
    {
        id: 1,
        image: '/images/art1.jpg',
        category: 'Universe',
        text: 'Perseid meteor shower of 2021, likely the best of the year, is peaking now!',
        date: '04 May 2021',
        likes: 655,
        comments: 34,
    },
    {
        id: 2,
        image: '/images/art2.jpg',
        category: 'Planet',
        text: 'Mercury-bound spacecraft snaps selfie with Venus in close flyby',
        date: '22 June 2021',
        likes: 587,
        comments: 59,
    },
    {
        id: 3,
        image: '/images/art3.jpg',
        category: 'Earth',
        text: 'The devastating wildfires of 2021 are breaking records and satellites are tracking it all',
        date: '18 October 2021',
        likes: 237,
        comments: 90,
    },
    {
        id: 4,
        image: '/images/art4.png',
        category: 'Universe',
        text: 'How big is a black hole? How messily it eats may be a clue.',
        date: '16 December 2021',
        likes: 998,
        comments: 2,
    },
    {
        id: 5,
        image: '/images/art5.jpg',
        category: 'Science',
        text: 'Cygnus cargo ship arrives at International Space Station with its biggest NASA haul ever',
        date: '05 April 2021',
        likes: 934,
        comments: 5,
    },
    {
        id: 6,
        image: '/images/art6.jpg',
        category: 'Universe',
        text: "Our Milky Way galaxy isn't very well mixed, study suggests",
        date: '22 September 2021',
        likes: 45,
        comments: 2,
    },
    {
        id: 7,
        image: '/images/art7.jpg',
        category: 'Technology',
        text: "Launch of SpaceX's private Inspiration4 mission slips by 24 hours",
        date: '07 August 2021',
        likes: 89,
        comments: 19,
    },
]

export const getArticlesObject = (array) =>
    array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )

export default articlesArray
