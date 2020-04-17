import React, { useEffect, useState } from 'react';

import { MDBCol, MDBFormInline } from 'mdbreact';
import axios from 'axios';
import NewHipHop from '../../components/newHiphop/HipHopTable.component';
import Pagination from '../../components/pagination/pagination';
const HipHop = () => {
  const [allMusic, setAllMusic] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [searchField, setSearchField] = useState('');
  const [heading] = useState('Hip Hop');

  useEffect(() => {
    setLoading(true);
    setAllMusic([
      {
        genre: 'hiphop',
        year: '2018',
        album: 'The College Dropout',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'Yandhi',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2005',
        album: 'Late Registration',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2008',
        album: "808's And Heartbreaks",
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2016',
        album: 'The Life Of Pablo',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2013',
        album: 'Yeezus',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2007',
        album: 'Gradution',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2010',
        album: 'My Beautiful Twisted Dark Fantasy',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2019',
        album: 'Jesus Is King',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'Ye',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Kanye West',
      },
      {
        genre: 'hiphop',
        year: '2009',
        album: 'The Last Kiss',
        Url: 'https:drive.com',
        featured: true,
        artist: 'JadaKiss',
      },
      {
        genre: 'hiphop',
        year: '2004',
        album: 'Kiss Of Death',
        Url: 'https:drive.com',
        featured: false,
        artist: 'JadaKiss',
      },
      {
        genre: 'hiphop',
        year: '2001',
        album: 'Kiss The Game GoodBye',
        Url: 'https:drive.com',
        featured: false,
        artist: 'JadaKiss',
      },
      {
        genre: 'hiphop',
        year: '2017',
        album: '508-507-2209',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Joyner Lucas',
      },
      {
        genre: 'hiphop',
        year: '2011',
        album: 'Cole World: The Sideline Story',
        Url: 'https:drive.com',
        featured: false,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2013',
        album: 'Born Sinner',
        Url: 'https:drive.com',
        featured: false,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2016',
        album: '4 Yours Eyes Only',
        Url: 'https:drive.com',
        featured: true,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'KOD',
        Url: 'https:drive.com',
        featured: true,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2014',
        album: 'Forest Hills Drive',
        Url: 'https:drive.com',
        featured: true,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'KOD',
        Url: 'https:drive.com',
        featured: true,
        artist: 'J Cole',
      },
      {
        genre: 'hiphop',
        year: '2020',
        album: 'Music To Be Murdered By',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Eminem',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'Kamikaze',
        Url: 'https:drive.com',
        featured: 'true',
        artist: 'Eminem',
      },
      {
        genre: 'hiphop',
        year: '2011',
        album: 'We The Best Forever',
        Url: 'https:drive.com',
        featured: true,
        artist: 'Dj Khaled',
      },
      {
        genre: 'hiphop',
        year: '2019',
        album: 'Father Of Asahad',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Dj Khaled',
      },
      {
        genre: 'rnb',
        year: '2004',
        album: 'Goddies',
        Url: 'https:drive.com',
        featured: true,
        artist: 'Ciara',
      },
      {
        genre: 'hiphop',
        year: '2019',
        album: 'K.R.I.T is here',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Big K.R.I.T',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'Everything Is Love',
        Url: 'https:drive.com',
        featured: false,
        artist: 'Beyonce & Jay Z',
      },
      {
        genre: 'hiphop',
        year: '2018',
        album: 'Invasion Of Privacy',
        Url: 'https:drive.com',
        featured: true,
        artist: 'Cardi B',
      },
      {
        genre: 'hiphop',
        year: '2009',
        album: 'Priceless',
        Url: 'https:drive.com',
        featured: true,
        artist: 'BirdMan',
      },
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

  let filteredMusic = allMusic.filter(
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
