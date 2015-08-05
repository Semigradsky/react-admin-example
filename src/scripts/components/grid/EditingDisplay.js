import React from 'react';
import { Link } from 'react-router';

import Modal from 'components/popups/Modal';

const EditingDisplay = React.createClass({
  getInitialState() {
    return { modalIsOpen: false };
  },

  openModal(e) {
    e && e.preventDefault();
    this.setState({ modalIsOpen: true });
  },

  closeModal(e) {
    e && e.preventDefault();
    this.setState({ modalIsOpen: false });
  },

  render() {
    const editLink = this.props.editRoute ? (
      <Link to={this.props.editRoute} params={{userId: this.props.rowData.id}} className="fa fa-pencil fa-lg link"/>
    ) : '';

    const child = this.props.remove ?
      React.Children.map(this.props.children, (el) => React.cloneElement(el, { close: this.closeModal })) : '';

    return child ? (
      <div>
        {editLink}
        <a href="#" className="fa fa-trash fa-lg link remove" onClick={this.openModal} />
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}
               className={this.props.className}>
          {child}
        </Modal>
      </div>
    ) : (
      <div>
        {editLink}
      </div>
    );
  }
});

export default EditingDisplay;
