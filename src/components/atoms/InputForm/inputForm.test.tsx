import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import InputForm from './index';
import { debug } from "node:console";

describe("InputForm", () => {
    it('Render InputForm', () => {
        const comp = render(
            <>
                <InputForm />
            </>
        );
        expect(comp.baseElement).toBeInTheDocument();
    })
})