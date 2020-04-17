import React from 'react';
import Tyga from '../../music/Tyga - Hookah (Official Music Video) ft. Young Thug.mp3';
const SinglesList = () => {
  return (
    <div className="container">
      <ul class="list-group">
        <li class="list-group-item active">Singles</li>
        <li class="list-group-item">
          <div className="row">
            <div className="col-6">
              <h6>Tyga -Hoykaar</h6>
            </div>

            <audio controls="controls">
              Your browser does not support the &lt;audio&gt; tag.
              <source src={Tyga} />
            </audio>
          </div>
        </li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
};

export default SinglesList;
