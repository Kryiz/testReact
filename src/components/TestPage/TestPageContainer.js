import { connect } from "react-redux";
import { addHookFieldToState, addFormikFieldToState } from "../../Redux/testPageReducer";
import TestPage from './TestPage';

let mapStateToProps = (state) => {
    return {
        hookMessage: state.testPage.hookForms.data,
        formikMessage: state.testPage.formikForms.data
    }
}

const TestPageContainer = connect(mapStateToProps,  {
    addHookFieldToState, addFormikFieldToState
})(TestPage);
export default TestPageContainer;