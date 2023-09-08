import Contacts from "./Contacts";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts
    }
}
const ContactsContainer = connect(mapStateToProps)(Contacts);

export default ContactsContainer;