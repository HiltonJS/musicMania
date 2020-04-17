import React, { useEffect, useState } from 'react';
import TopHipHop from '../../components/topHipHop/topHipHop.component';
import TopRnB from '../../components/topRnb/topRnb.component';
import MusicTable from '../../components/newHiphop/HipHopTable.component';
import Loading from '../../images/source.gif';
import SinglesList from '../../components/singlesList/singlesList.component';
import CarouselPage from '../../components/corosel/corosel.component';
//import axios from 'axios';
const HomePage = () => {
  const [allMusic, setAllMusic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setOthers = () => {
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
          featured: true,
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
          featured: true,
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
          featured: true,
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
    };

    setOthers();
  }, []);

  console.log(allMusic);

  // componentDidMount() {
  //   this.getalbums();
  // }
  // getalbums = async () => {
  //   await axios
  //     .get('/HipHop')
  //     .then((res) => {
  //       this.setState({ allMusic: res.data });
  //       console.log(this.state.allMusic);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   this.setState({
  //     hipHop: allHopHop,
  //     rnb: allRnb,
  //   });
  //   console.log(this.state.hipHop);
  // };
  let hiphop = allMusic.filter(
    (album) => album.featured === true && album.genre === 'hiphop'
  );

  let rnb = allMusic.filter(
    (album) => album.featured === true && album.genre === 'rnb'
  );
  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center p-3">
          <img src={Loading} alt="loading" className="img-fluid" />
        </div>
      </div>
    );
  }
  return (
    <div className="container p-3">
      <CarouselPage />
      <MusicTable filteredMusic={hiphop} heading={'Top Hip Hop'} />
      <MusicTable filteredMusic={rnb} heading={'Top Rnb'} />
      <SinglesList />
    </div>
  );
};

export default HomePage;
