import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from './index';

describe("Button", () => {
    it('Render Button', () => {
        const comp = render(
            <>
                <Button />
            </>
        );
        expect(comp.baseElement).toBeInTheDocument();
    })
})