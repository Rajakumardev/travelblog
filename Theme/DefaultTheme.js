import { extendTheme } from "@chakra-ui/react";

const DefaultTheme = extendTheme({
    colors: {
        primary: {
            900: '#264653',
            800: "#2e5463",
            700: "#3d7085",
        },
        secondary: {
            900: '#2a9d8f',
        },
        accent: {
            900: '#e76f51',
        },
        background: {
            900: '#ffffff',
        },
    }
});

export default DefaultTheme;