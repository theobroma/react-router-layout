import React, { Component, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Header2 from 'components/Header2';
import menuList from './menuList';

import { authSelector } from 'store/auth/selectors';

const mapStateToProps = state => ({
  isAuth: authSelector(state),
});

@connect(
  mapStateToProps,
  null,
)
class HeaderContainer extends Component {
  componentDidMount() {}

  render() {
    const { isAuth } = this.props;
    return (
      <Fragment>
        <Header2 isAuth={isAuth} menuList={menuList} />
      </Fragment>
    );
  }
}

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool,
};

export default HeaderContainer;
