import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios'




export default class DashStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5d018fbd3100005400ab2968')
      .then(res => {
          this.setState({
            isLoaded: true,
            items: res.data
          })
      });
      console.log(this.state.items);
  }
 



 render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
      }
      else {
  return (
    <div className="test">
         <div className="totals-wrapper">
       
         <h2 className="totals">Loaded</h2>
         <h2 className="dash-stat">Last Week</h2>
         
         </div>

         <div className="stats-wrapper">
           <div className="data-wrapper">
           
           <h2 className="totals-data">597</h2>
           <h2 className="dash-stat">New Feedbacks</h2>
           </div>
           <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">16.6M$</h2>
           <h2 className="dash-stat">Total Profit</h2>
           </div>
            <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">7.5K</h2>
           <h2 className="dash-stat">New Orders</h2>
           </div>
           <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">+48%</h2>
           <h2 className="dash-stat">Brand Popularity</h2>
           </div>
         </div>
                
       </div>
    );
      }
   }
}
