import React, { Component } from 'react';
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import NewsPage from 'containers/NewsPage';
import ProfilePage from 'containers/ProfilePage';
import HeaderContainer from 'containers/HeaderContainer';
import HeaderContainer2 from 'containers/HeaderContainer2';

const MainLayout = props => (
  <div>
    <HeaderContainer />
    <h1>Main Layout</h1>
    {props.children}
  </div>
);

const AltLayout = props => (
  <div>
    <HeaderContainer2 />
    <h1>Alt Layout</h1>
    {props.children}
  </div>
);

const routes = [
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
    isExact: true,
    layout: MainLayout,
  },
  {
    path: '/login',
    component: LoginPage,
    isPrivate: false,
    isExact: true,
    layout: MainLayout,
  },
  {
    path: '/news',
    component: NewsPage,
    isPrivate: false,
    isExact: true,
    layout: AltLayout,
  },
  {
    path: '/profile',
    component: ProfilePage,
    isPrivate: true,
    isExact: true,
    layout: AltLayout,
  },
];

export default routes;
