import styled, { css } from 'styled-components'


export const HeaderContainer = styled.div`
height: 60px;
display:flex;
align-items: center;
justify-content: space-between;
padding:0 4px 0 10px;
background-color: #212e3c;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),
            0px 4px 5px 0px rgba(0,0,0,0.14),
            0px 1px 10px 0px rgba(0,0,0,0.12);
`

export const HeaderLogoWrapper = styled.div``

export const HeaderLogo = styled.img``

export const HeaderTitleWrapper = styled.div``

export const HeaderTitle = styled.img`
height:56px;
width:98px;`

export const HeaderButtonsWrapper = styled.div`
display:flex;
flex-direction: row;
gap:3px;
`

export const HeaderButtonWrapper = styled.div`
`

export const HeaderButton = styled.button(({ type }) => css`
height:27px;
padding:2px 8px;
background-color: ${type === 'new' ?
        `#ffaa00` : type === 'log' ?
            `#0430d5` : type === 'camera' ?
                `#0227b3` : `none`};
border:none;
color:#fff;
border-radius:4px;
font-family:'Open Sans';
font-weight: 700;
text-transform:uppercase;
font-size:.65rem;
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
            0px 2px 2px 0px rgba(0,0,0,0.14),
            0px 1px 5px 0px rgba(0,0,0,0.12);
`)

export const HeaderButtonIcon = styled.img`
width:100%;
height:22px;

filter: invert(100%) sepia(0%) saturate(7486%) hue-rotate(42deg) brightness(92%) contrast(119%);
`

