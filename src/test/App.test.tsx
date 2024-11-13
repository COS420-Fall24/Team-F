import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

describe("testing homepage", () => {
    beforeEach(() => {
        render(<App />);
    });
    test('homepage renders "VibeCheque" to the screen', () => {
        const applicationName = screen.getAllByText(/VibeCheque/)[0];
        expect(applicationName).toBeInTheDocument();
    });

    test('nefarious test', () => {
        const applicationName = screen.getByText(/VibeCheque/i);
        expect(applicationName).not.toBeInTheDocument();
    });

    // links to nothing so far, should have "href" that links to the about page eventually
    // test('homepage has link to the "About" page', () => {
    //     const link = screen.getByText(/About/);
    //     expect(link).toHaveAttribute("href");
    // });
});
