import React from 'react'

import * as Styled from './NavbarStyled'

const Navbar = () => {

    const navbarHome = { label: 'acasa', icon: 'https://www.winner.ro/buildmobile/static/media/home@3x.f39ef7c3.png', selected: false }
    const navbarSearch = { label: 'cautare', icon: 'https://www.winner.ro/buildmobile/static/media/search%20ico@3x.41201966.png', selected: false }
    const navbarItems = [
        { label: 'jocuri', icon: 'https://t5a4q7k3.stackpathcdn.com/slots%20ico@3x-1631192320781.png', selected: false },
        { label: 'live casino', icon: 'https://t6n3v3q4.stackpathcdn.com/Layer%201@2x-1665486775414.png', selected: false },
        { label: 'turnee', icon: 'https://t6n3v3q4.stackpathcdn.com/img-icon-tournaments-new-1650031932021.png', selected: true },
        { label: 'instant', icon: 'https://t6n3v3q4.stackpathcdn.com/icon-dropsandwins-1639486958847.png', selected: false },
        { label: 'favorite', icon: 'https://www.winner.ro/buildmobile/static/media/fac%20ico@3x.3869f299.png', selected: false },
    ]
    // i added 'selected' bool prop to objects to have one highlighted; in a routed app i would use the useParams hook to identify the page we are on and highlight the item based on that
    return (
        <Styled.NavbarContainer>
            <Styled.NavbarItemWrapper selected={navbarHome.selected}>
                <Styled.NavbarItemIcon src={navbarHome.icon} />
                <Styled.NavbarItemLabel selected={navbarHome.selected}>{navbarHome.label}</Styled.NavbarItemLabel>
            </Styled.NavbarItemWrapper>
            <Styled.NavbarItemSpacer />
            <Styled.NavbarItemWrapper selected={navbarSearch.selected}>
                <Styled.NavbarItemIcon src={navbarSearch.icon} />
                <Styled.NavbarItemLabel selected={navbarSearch.selected}>{navbarSearch.label}</Styled.NavbarItemLabel>
            </Styled.NavbarItemWrapper>
            <Styled.NavbarItemSpacer />
            {navbarItems?.map((item, index) => {
                return (
                    <Styled.NavbarItemWrapper key={`navbar-item--${index}`} selected={item.selected}>
                        <Styled.NavbarItemIcon src={item.icon} />
                        <Styled.NavbarItemLabel selected={item.selected}>{item.label}</Styled.NavbarItemLabel>
                    </Styled.NavbarItemWrapper>
                )
            })}
        </Styled.NavbarContainer>
    )
}

export default Navbar