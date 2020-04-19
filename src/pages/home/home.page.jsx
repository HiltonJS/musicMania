import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MusicTable from '../../components/newHiphop/HipHopTable.component';

import { fetchMusic } from '../../redux/dataActions';
import SpinnerPage from '../../components/Spinner.component';
import axios from 'axios';
//import axios from 'axios';
axios.defaults.baseURL =
  'https://us-central1-musapp-827c0.cloudfunctions.net/api';
const HomePage = () => {
  const allMusic2 = useSelector((state) => state.allMusic);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  // const [allMusic, setAllMusic] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchMusic());
  }, []);

  console.log(allMusic2);

  let hiphop = allMusic2.filter(
    (album) => album.featured === true && album.genre === 'hiphop'
  );

  let rnb = allMusic2.filter(
    (album) => album.featured === true && album.genre === 'rnb'
  );
  if (loading) {
    return (
      <div className="container">
        <div className=" d-flex justify-content-center p-3">
          <SpinnerPage />
        </div>
      </div>
    );
  }
  return (
    <div className="container p-3">
      <MusicTable filteredMusic={hiphop} heading={'Top Hip Hop'} />
      <MusicTable filteredMusic={rnb} heading={'Top Rnb'} />
    </div>
  );
};

export default HomePage;
