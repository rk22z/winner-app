import React from 'react'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import * as Styled from './LayoutStyled'

const Layout = (props) => {

    const { children } = props;

    return (
        <Styled.LayoutContainer>
            <Styled.LayoutHeaderWrapper><Header /></Styled.LayoutHeaderWrapper>
            <Styled.LayoutNavbarWrapper><Navbar /></Styled.LayoutNavbarWrapper>
            <Styled.LayoutContentWrapper>{children}</Styled.LayoutContentWrapper>
        </Styled.LayoutContainer>
    )
}

export default Layout