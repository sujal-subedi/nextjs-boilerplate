import {  ChakraComponent, ComponentStyleConfig, extendTheme } from "@chakra-ui/react";


const ButtonConfig : ComponentStyleConfig = {
    baseStyle:{
            
    },
    sizes:{

    },
    variants:{

    },
    defaultProps:{

    }
}

const CompnentsConfig: Record<string, ComponentStyleConfig> = {
    Button: ButtonConfig
}

const theme = extendTheme({
    colors:{

    },

    components:CompnentsConfig


});

export default theme;