import Img from '../components/nav/assets/cart.svg'

export const ReduxState = {
    nav: {
        item: [
            {
                to: '/reproduction',
                text: 'Репродукции',
            },
            {
                to: '/new',
                text: 'Новинки',
            },
            {
                to: '/aboutUs',
                text: 'О нас',
            },
        ],
        itemLogo: [
            {
                to: './df',
                src: Img,
            },
        ],
    },
    header: [
        {},
    ],
}