import React, { Component } from 'react';
import TopHipHop from '../../components/topHipHop/topHipHop.component';
import TopRnB from '../../components/topRnb/topRnb.component';
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <TopHipHop />
        <TopRnB />
      </div>
    );
  }
}
export default HomePage;
