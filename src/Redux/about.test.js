import aboutPageReducer, { addStatus } from "./aboutPageReducer";

it('new status should be added', () => {
    // 1. Test data
    let action = addStatus('New_STATUS');
    let state = {
        status: '',
    }

    // 2. action
    let newState = aboutPageReducer(state, action);

    // 3. expectation
    expect(newState.status).toBe('New_STATUS');
})