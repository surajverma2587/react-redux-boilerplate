import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../../actions/route1";
import Header from "../../components/Header";

class Route1 extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        {this.props.loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <Header value={this.props.value} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.route1
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route1);
