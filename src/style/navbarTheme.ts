// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

var theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                color: "#ffffea",
                fontSize: "24px",
                fontWeight: "extrabold",
                textAlign: "center",
                marginLeft: "3vw",
            },
            variants: {
                lastItem: { marginRight: "5vw" },
            },
        },
    },
});

export default theme;
