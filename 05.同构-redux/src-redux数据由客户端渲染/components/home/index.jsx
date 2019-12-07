import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsAsync } from "./store";

class Home extends Component {
  state = {
    loading: false
  };

  handleClick = () => {
    console.log("戳我~~~~");
  };

  componentDidMount() {
    this.props.getNewsAsync();
  }

  render() {
    return (
      <div>
        <h3>home...</h3>
        <ul>
          {this.props.news.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ news: state.news }), { getNewsAsync })(Home);
