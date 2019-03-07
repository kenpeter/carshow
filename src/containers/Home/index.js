import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Home as HomeComponent } from '../../components/Home';
import MainLayout from '../../layouts/MainLayout';
import { loadHomeAPI } from '../../reducers/home';

class Home extends Component {

  constructor(props) {
    super(props);
    loadHomeAPI();
  }

  render() {
    return (
      <MainLayout>
        <HomeComponent />
      </MainLayout>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  loadHomeAPI: dispatch(loadHomeAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
