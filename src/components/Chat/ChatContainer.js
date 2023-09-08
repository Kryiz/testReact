import { connect } from "react-redux";
import Chat from './Chat';
import { addMessage } from "../../Redux/chatPageReducer";

let mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages
    }
}
const ChatContainer = connect(mapStateToProps, {addMessage})(Chat);
export default ChatContainer;