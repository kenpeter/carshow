import React, { Component } from 'react';
/* eslint-disable import/no-named-default */
import { default as HomeComponentTest } from '../../components/HomeTest';
import MainLayout from '../../layouts/MainLayout';

/* eslint-disable react/prefer-stateless-function */
class HomeTest extends Component {

  render() {
    return (
      <MainLayout>
        <HomeComponentTest />
      </MainLayout>
    );
  }
}

export default HomeTest
