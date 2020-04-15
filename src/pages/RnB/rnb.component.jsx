import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDBCol, MDBFormInline } from 'mdbreact';
import axios from 'axios';
class RnB extends Component {
  state = {
    newMusic: [],
    searchField: '',
  };
  componentDidMount() {
    this.getalbums();
  }
  getalbums = () => {
    axios
      .get('/HipHop')
      .then((res) => {
        this.setState({ newMusic: res.data });
        console.log(this.state.newMusic);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    console.log(this.state.newMusic);

    let filteredMonsters = this.state.newMusic.filter(
      (album) =>
        album.artist
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase()) &&
        album.genre === 'hiphop'
    );
    return (
      <div>
        <MDBCol md="12">
          <MDBFormInline className="md-form mr-auto mb-4">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Artist"
              aria-label="Search"
              onChange={this.handleChange}
            />
          </MDBFormInline>
        </MDBCol>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Year</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredMonsters.length === 0 ? (
              <tr>
                <th></th>
                <th></th>
                <th>Nothing to show</th>
              </tr>
            ) : (
              filteredMonsters.map((album) => {
                return (
                  <tr>
                    <th scope="row">{album.artist}</th>
                    <td>{album.album}</td>
                    <td>{album.year}</td>
                    <td>
                      <a href={album.url}>Download</a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RnB;
