import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello world! Hello everyone!</h2>
        <p>Welcome to my blog. Here you will find some posts.</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

Home.propTypes = {
};

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home);
