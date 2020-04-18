import React, { useEffect, useState } from 'react';

import { MDBCol, MDBFormInline } from 'mdbreact';

import NewHipHop from '../../components/newHiphop/HipHopTable.component';
import Pagination from '../../components/pagination/pagination';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMusic } from '../../redux/dataActions';
import SpinnerPage from '../../components/Spinner.component';
const HipHop = () => {
  const dispatch = useDispatch();
  const allMusic2 = useSelector((state) => state.allMusic);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchMusic());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [searchField, setSearchField] = useState('');
  const [heading] = useState('Hip Hop');

  const compare = (a, b) => {
    const artistA = a.artist.toLowerCase();
    const artistB = b.artist.toLowerCase();

    let comparison = 0;
    if (artistA > artistB) {
      comparison = 1;
    } else if (artistA < artistB) {
      comparison = -1;
    }
    return comparison;
  };

  let filteredMusic = allMusic2.filter(
    (album) =>
      album.artist.toLowerCase().includes(searchField.toLowerCase()) &&
      album.genre === 'hiphop'
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredMusic
    .sort(compare)
    .slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
    <div className="container">
      <MDBCol md="12">
        <MDBFormInline className="md-form mr-auto mb-4">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Artist"
            aria-label="Search"
            onChange={handleChange}
          />
        </MDBFormInline>
      </MDBCol>
      <NewHipHop filteredMusic={currentPosts} heading={heading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredMusic.length}
        paginate={paginate}
      />
    </div>
  );
};

export default HipHop;
