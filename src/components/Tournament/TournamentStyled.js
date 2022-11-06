import styled, { css } from 'styled-components'


export const TournamentContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const ActiveCard = styled.div(({ active }) => css`
width:50%;
border-radius: 4px;
background-color:${active ? `#eead03` : `#5c5c5ce3`};
padding: 4px 8px;
display:flex;
align-items:center;
justify-content: center;
margin:0 0 0 10px;`)

export const ActiveCardText = styled.span`
color:#fff;
font-weight: 700;
font-size: 10px;
text-transform: uppercase;

`

export const ActivePeriod = styled.div`
margin:0 0 5px 10px;`

export const ActivePeriodText = styled.span`
font-size:12px;
font-weight: 600;
color:#fff;
`

export const TournamentCard = styled.div`
height:220px;
width:200px;
background-color: azure;
display: flex;
flex-direction: column;
 border-radius: 18px;
background: linear-gradient(0deg,rgba(33,51,72,0),#2a0d66 14.2%,#3b0f67 22.3%,rgba(29,30,62,0) 60.6%,rgba(20,34,50,0));
border:2px solid #2d3e5e;
`

export const TournamentCardHeader = styled.div`
width:100%;
height:50px;
display:flex;
gap:40px;
`

export const TournamentCardHeaderIcon = styled.img`
max-width:60px;`

export const TournamentCardHeaderText = styled.span`
color:#4be7ff;
max-width: 20px;
font-size: 10px;
font-weight: 700;
`


export const TournamentCardHeaderWrapper = styled.div`
display:flex;`

export const TournamentTitle = styled.p`
padding:10px 0 0 0;
text-align: center;
text-transform: uppercase;
color:#b5bfd0;
font-size: 12px;
font-weight: 600;
margin: 0 10px;
border-bottom: 1px solid rgba(94,113,134,.34901960784313724);
`


export const TournamentInfoContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin:10px 0 10px 0;`

export const TournamentInfoWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const TournamentInfoIcon = styled.img`
width:70px;
aspect-ratio:1;`

export const TournamentInfoText = styled.span`
color:#fff;
    font-size: 11px;
    font-weight: 700;
    text-shadow: 2px 2px #2d1354;`

export const TournamentEnrollContainer = styled.div`
width:100%;
height:20px;
border: 1px solid #fff;
 background: linear-gradient(90deg,#800d37,#ff196e 17.6%,#ff196e 82.2%,#800d37);
display: flex;
justify-content: center;
align-items: center;
`

export const TournamentEnrollText = styled.span`
font-size: 10px;
    line-height: 11px;
    font-weight: 600;
    color: #fff;`

export const TournamentParticipateContainer = styled.div`
height: 20px;
padding:4px 0px;
    border-radius: 0 0 18px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(90deg,#ee034a,#3700f3);
`


export const TournamentDetailsWrapper = styled.div`
width:100%;
display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:5px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    padding:5px 0 0 0;
    text-transform: uppercase;
    `

export const TournamentDetailsText = styled.span``

export const TournamentDetailsIcon = styled.img``