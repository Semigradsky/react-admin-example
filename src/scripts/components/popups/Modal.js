'use strict';

import React from 'react';
import Modal from 'react-modal';

require('./modal.css');

const appElement = document.getElementsByTagName('body')[0];
Modal.setAppElement(appElement);

const CustomModal = React.createClass({
  render() {
    return <Modal {...this.props} />;
  }
});

export default CustomModal;
