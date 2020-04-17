import React, { Component } from 'react';

const TopRnB = ({ rnb }) => {
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
              {rnb.map((rnbs) => (
                <tr>
                  <th scope="row">{rnbs.artist}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TopRnB;
