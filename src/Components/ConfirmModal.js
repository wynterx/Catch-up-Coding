import React from 'react';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
class ConfirmModal extends React.Component {
  handleClose = () => {
    const { onClose, onComfirm } = this.props;
    onComfirm();
    onClose();
  };
  render() {
    const { open, onClose } = this.props;
    return (
      <Modal size="small" open={open}>
        <Header icon="trash" content="Delete a question" />
        <Modal.Content>
          <p>Do you want to delete this question ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={() => onClose}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={() => this.handleClose}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ConfirmModal;
