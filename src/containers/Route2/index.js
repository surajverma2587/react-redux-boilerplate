import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../../actions/route2";
import Header from "../../components/Header";

class Route2 extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
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
  ...state.route2
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route2);
