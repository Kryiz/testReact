import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const editStatus = (e) => {
        props.addStatus(status);
        setEditMode(false);
    };
    const selectStatus = e => {
        e.target.select()
    }
    debugger;
    return (
        <div>
            {!editMode && (
                <Text onClick={() => setEditMode(true)}> {status}</Text>
            )}
            {editMode && (
                <Input
                    autoFocus
                    onBlur={e => editStatus(e)}
                    onChange={e => setStatus(e.target.value)}
                    onFocus={e => selectStatus(e)}
                    value={status}
                />
            )}
        </div>
    );
};
// class StatusClass extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };
//   activateEditMode() {
//     this.setState({
//       editMode: true,
//     });
//   }
//   deactivateEditMode() {
//     this.setState({
//       editMode: false,
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.editMode ? (
//           <Text onDoubleClick={this.deactivateEditMode.bind(this)}>{123}</Text>
//         ) : (
//           <Input onBlur={this.activateEditMode.bind(this)} autoFocus={true} />
//         )}
//       </div>
//     );
//   }
// }
const Text = styled.p`
    color: rgb(100 85 85);
    margin-bottom: 20px;
`;
const Input = styled.input`
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #000;
`;
export default Status;