import React from 'react';

const MusicTable = ({ filteredMusic, heading }) => {
  return (
    <div>
      <h4 className="text-center text-uppercase">{heading}</h4>
      <table className="table table-hover shadow p-3 mb-5 bg-white rounded">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Year</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredMusic.length === 0 ? (
            <tr>
              <th></th>
              <th></th>
              <th>Nothing to show</th>
            </tr>
          ) : (
            filteredMusic.map((album) => {
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
};
export default MusicTable;
