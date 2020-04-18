import React from 'react';
import Adele from '../../music/04 When We Were Young.mp3';
import AdeleImage from '../../images/Adele – 25 (Special Holiday Edition) (2015)...Freak37.jpg';
const SinglesList = () => {
  return (
    <div className="container">
      <ul class="list-group">
        <li class="list-group-item active text-center">Singles</li>
        <li class="list-group-item">
          <div className="row">
            <div className="col-6">
              <h6 className="p-3">Adele-When We Where Young</h6>
            </div>

            <audio controls="controls">
              Your browser does not support the &lt;audio&gt; tag.
              <source src={Adele} />
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
