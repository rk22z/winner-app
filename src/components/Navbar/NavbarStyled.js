import styled, { css } from 'styled-components'

export const NavbarContainer = styled.div`
background-color:#142232;
width: 100%;
height: 70px;
display: flex;
align-items: center;
padding:10px 10px 0px;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
flex: 1 1 auto;
gap:8px;
`

export const NavbarItemWrapper = styled.div(({ selected }) => css`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::after{
    ${selected && css`
    content: "";
    margin:10px 0 0 0;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: #fd6e00;
 `}
}
`)

export const NavbarItemIcon = styled.img`
height:40px;
`

export const NavbarItemLabel = styled.span(({ selected }) => css`
color:${selected ? `#fd6e00` : `white`};
text-transform:capitalize;
text-align: center;
font-size: 12px;
font-weight: 600;
font-family:'Open Sans';

`)

export const NavbarItemSpacer = styled.div`
width:3px;
height: 38px;
background-color: white;
border-radius: 3px;
margin:15px 0 0 0;
`

