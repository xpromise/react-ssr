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
  // componentDidMount生命周期函数在服务器渲染时不会调用
  // 导致数据不能加载
  componentDidMount() {
    if (!this.props.news.length) {
      this.props.getNewsAsync();
    }
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

// 异步加载数据
Home.loadData = store => {
  return store.dispatch(getNewsAsync());
};

export default connect(state => ({ news: state.news, state: state }), {
  getNewsAsync
})(Home);
