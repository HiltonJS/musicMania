import React from 'react';
import './topHipHop.stlyes.scss';

const TopHipHop = ({ hipHop }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <p className=" paprat text-center">Top HipHop</p>
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
              {hipHop.map((hiphop) => {
                return (
                  <tr>
                    <th scope="row">{hiphop.artist}</th>
                    <td>{hiphop.album}</td>
                    <td>{hiphop.year}</td>
                    <td>
                      <a href={hiphop.url}>Download</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TopHipHop;
