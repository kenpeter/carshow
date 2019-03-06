import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { styles } from './styles';

class MainLayout extends Component {

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Header />

        <div className='body'>
          { children }
        </div>

        <Footer />
      </Container>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node
};

MainLayout.defaultProps = {
  children: null
}

export default MainLayout;
