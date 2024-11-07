import { defineRecipe } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
var navbarLinkRecipe = defineRecipe({
    base: {
        color: "#ffffea",
        fontSize: "24px",
        fontWeight: "extrabold",
        textAlign: "center",
        marginLeft: "3vw",
    },
    variants: {
        order: {
            lastItem: { marginRight: "5vw" },
        },
    },
});

export default navbarLinkRecipe;
