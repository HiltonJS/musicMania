import React, { useEffect, useState } from 'react';
import NewHipHop from '../../components/newHiphop/HipHopTable.component';
import Pagination from '../../components/pagination/pagination';
import { MDBCol, MDBFormInline } from 'mdbreact';
import axios from 'axios';
const RnB = () => {
  // componentDidMount() {
  //   this.getalbums();
  // }
  // getalbums = () => {
  //   axios
  //     .get('/HipHop')
  //     .then((res) => {
  //       this.setState({ newMusic: res.data });
  //       console.log(this.state.newMusic);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [allMusic, setAllMusic] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    setLoading(true);
    setAllMusic([
      {
        artist: 'Roar',
        year: '2020',
        album: 'brother',
        genre: 'hiphop',
        url:
          'https://drive.google.com/open?id=1gxVRIHlERifA_m6sj5sp6ePJyksaJZie',
      },
      {
        year: '2016',
        album: 'Black America Again',
        featured: true,
        url: 'drive.com',
        artist: 'Common',
        genre: 'hiphop',
      },
      {
        year: '2008',
        album: 'The Gutta',
        featured: 'false',
        url: 'drive.com',
        artist: 'Ace Hood',
        genre: 'hiphop',
      },
      {
        genre: 'hiphop',
        year: '2008',
        album: 'Rebel',
        Url: 'https:drive.com',
        featured: 'true',
        artist: 'Lecrae',
      },
      {
        artist: 'John Legend',
        year: '2013',
        album: 'Love in the future',
        genre: 'rnb',
        url: 'drive.com',
      },
      {
        year: '2018',
        album: 'Summer Pack',
        featured: true,
        url: 'drive.com',
        artist: 'Childish Gambino',
        genre: 'hiphop',
      },
      {
        url: 'drive.com',
        artist: 'Chance the Rapper',
        year: '2016',
        album: 'Colouring Book',
        genre: 'hiphop',
      },
      {
        genre: 'rnb',
        year: '2016',
        album: 'Anti',
        featured: 'true',
        url: 'drive.com',
        artist: 'Rihanna',
      },
      {
        album: 'Split Personality',
        genre: 'hiphop',
        url: 'drive.com',
        artist: 'Cassidy',
        year: '2004',
      },
      {
        artist: 'Lecrae',
        year: '2011',
        album: 'Gravity',
        featured: true,
        genre: 'hiphop',
      },
      {
        artist: 'Ace Hood',
        year: '2009',
        album: 'Ruthless',
        genre: 'hiphop',
        url: 'drive.com',
      },
      {
        artist: 'Ariana Grande',
        year: '2018',
        album: 'Sweetner',
        genre: 'rnb',
        url: 'drive.com',
      },
      {
        artist: 'Beyonce',
        genre: 'rnb',
        year: '2016',
        album: 'Lemonade',
        featured: 'true',
        url: 'drive.com',
      },
      {
        album: 'The Big Day',
        genre: 'hiphop',
        url: 'drive.com',
        artist: 'Chance the Rapper',
        year: '2019',
      },
      {
        genre: 'hiphop',
        url: 'drive.com',
        artist: '50 Cent',
        year: '2008',
        album: 'Before I self destruct ',
      },
      {
        url: 'drive.com',
        artist: 'Childish Gambino',
        'year ': '2016',
        album: 'Awaken , My Love ',
        genre: 'hiphop',
      },
      {
        artist: 'Cassidy',
        year: '2005',
        album: 'I`m a Hustla',
        genre: 'hiphop',
        url: 'drive.com',
      },
      {
        artist: 'Cassidy',
        year: '2010',
        album: 'C.A.S.H',
        genre: 'hiphop',
        url: 'drive.com',
      },
      {
        album: 'Church Clothes',
        genre: 'hiphop',
        url: 'https:drive.url',
        artist: 'Lecrae',
        year: '2011',
      },
      {
        artist: 'Jay z',
        year: '2017',
        album: '4:44',
        genre: 'hiphop',
        url: 'drive.com',
      },
      {
        artist: 'Cassidy',
        year: '2007',
        album: 'B.A.R.S the Barry Adrian Reese Story',
        genre: 'hiphop',
        url: 'drive.com',
      },
    ]);
    setLoading(false);
  }, []);

  let filteredMusic = allMusic.filter(
    (album) =>
      album.artist.toLowerCase().includes(searchField.toLowerCase()) &&
      album.genre === 'rnb'
  );
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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentMusic = filteredMusic
    .sort(compare)
    .slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <MDBCol md="6">
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
      <NewHipHop filteredMusic={currentMusic} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredMusic.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RnB;
