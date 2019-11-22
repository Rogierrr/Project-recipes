import React, { Component } from 'react';

export default class AddComment extends Component {
  handleSubmit(event) {
    event.preventDefault()
    console.log('Submitting form...')
  }

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}