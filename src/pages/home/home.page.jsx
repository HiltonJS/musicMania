import React, { Component } from 'react';
import TopHipHop from '../../components/topHipHop/topHipHop.component';
import TopRnB from '../../components/topRnb/topRnb.component';
import axios from 'axios';
class HomePage extends Component {
  state = {
    allMusic: [],
    hipHop: [],
    rnb: [],
  };
  componentDidMount() {
    this.getalbums();
  }
  getalbums = async () => {
    await axios
      .get('/HipHop')
      .then((res) => {
        this.setState({ allMusic: res.data });
        console.log(this.state.allMusic);
      })
      .catch((err) => {
        console.log(err);
      });

    let allHopHop = this.state.allMusic.filter(
      (album) => album.featured === true
    );
    this.setState({
      hipHop: allHopHop,
    });
    console.log(this.state.hipHop);
  };

  render() {
    return (
      <div className="container">
        <TopHipHop hipHop={this.state.hipHop} />
        <TopRnB />
      </div>
    );
  }
}
export default HomePage;
