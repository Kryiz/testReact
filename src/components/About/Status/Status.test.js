import React from "react";
import Status from "./Status.jsx";
import TestRenderer from "react-test-renderer";

describe("Profile Status component", () => {
    test("status from props should be in the state", () => {
        const testRenderer = TestRenderer.create(<Status status="test" />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({ status: "test" })).toBeTruthy();
    });
    test("component should have paragreph", () => {
        const testRenderer = TestRenderer.create(<Status />);
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType("p").length).toBe(1);
    });
});
