import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = e => {
    this.setState({ term: e.target.value });
    // e.persist();
  }

  render() {
    return (
      <div className=" search-bar ui segment" style={{background: 'none'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Utube-Yahtzee Search:</label>
            <input
              type="text"
              style={{background: 'none'}}
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
