import React, { Component } from 'react';

class TopRnB extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <p className=" paprat text-center">Top RnB</p>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Artist</th>
                  <th scope="col">Album</th>
                  <th scope="col">Year</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default TopRnB;
