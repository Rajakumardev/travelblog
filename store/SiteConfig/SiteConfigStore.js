export const SiteConfigStore = React.createContext({
    global: {
        title: 'The Blog',
        logo: '',
        favicon: '',
    },
    navMenu: [{
        name: 'Home',
        link: '/'
    }, {
        name: 'About',
        link: '/about'
    }]
});