import React from 'react';
import Modal from 'react-modal';

import './modal.css';

const appElement = document.getElementsByTagName('body')[0];
Modal.setAppElement(appElement);

const CustomModal = React.createClass({
  render() {
    return <Modal {...this.props} />;
  }
});

export default CustomModal;
