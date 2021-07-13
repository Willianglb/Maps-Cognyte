import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Logo from './index';

describe("Logo", () => {
    it('Render Logo', () => {
        const comp = render(
            <>
                <Logo />
            </>
        );
        expect(comp.baseElement).toBeInTheDocument();
    })
})