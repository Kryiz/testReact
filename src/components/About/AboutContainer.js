import { connect } from "react-redux";
import About from "./About";
import { getNewStatus } from "../../Redux/about-selector";
import { addStatus } from "../../Redux/aboutPageReducer";

let mapStateToProps = state => {
    return {
        status: getNewStatus(state)
    }
} 
const aboutContainer = connect(mapStateToProps, {addStatus})(About);
export default aboutContainer;