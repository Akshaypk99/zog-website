// EditPopup.js
import React, { Component } from 'react';

class EditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: props.initialValue,
    };
  }

  handleEdit = () => {
    this.props.onEdit(this.state.category_name);
  };

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <div className={`edit-popup ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-content">
          <h2>Edit Data</h2>
          <input
            type="text"
            name='category_name'
            value={this.state.category_name}
            onChange={e => this.setState({ category_name: e.target.value })}
          />
          <button onClick={this.handleEdit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default EditPopup;