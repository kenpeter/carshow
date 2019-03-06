import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Home as HomeComponent } from '../../components/Home';
import MainLayout from '../../layouts/MainLayout';

class Home extends Component {

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

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
