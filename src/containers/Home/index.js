import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Home as HomeComponent } from '../../components/Home';
import MainLayout from '../../layouts/MainLayout';
import { loadHomeAPI } from '../../reducers/home';

class Home extends Component {
  componentDidMount() {
    this.props.loadHomeAPIProps();
  }

  render() {
    const { data } = this.props;

    return (
      <MainLayout>
        {
          data.length === 0 ?
            <p>Loading....</p>
          :
          <HomeComponent data={ data } />
        }
      </MainLayout>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    data: state.homeReducer.data
  }
};

const mapDispatchToProps = dispatch => ({
  loadHomeAPIProps: () => dispatch(loadHomeAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
