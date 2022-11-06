import styled, { css } from 'styled-components'


export const TournamentsPageContainer = styled.div`
margin: 10px 10px;

`

export const TournamentsPageTextWrapper = styled.div``

export const TournamentsPageText = styled.p(({ type }) => css`
margin:0;
font-family:'Open Sans';

${type === 'title' && css`
    color: #d5dae4;
    font-size: clamp(18px,1.8vw,26px);
    font-weight: 600;
    text-align: left;`}

${type === 'subtitle' && css`
    color:#b5bfd0;
    font-size: clamp(10px,1vw,12px);
    font-weight: 700;
    text-align: left;
`}
`)

export const TournamentsPageCardWrapper = styled.div`
width:100%;
height: 500px;
border-radius: 18px;
display:flex;
justify-content: center;
margin:10px 0 0 0;
`

export const TournamentsPageCard = styled.div`
width:100%;
height: 490px;
border-radius: 18px;
border: 2px solid rgba(136, 162, 252, 0.333);
`

export const CardImage = styled.div`
background-image: url("https://t6n3v3q4.stackpathcdn.com/img-tournament-wizard-girl-fighter-1650018456092.jpg");
height: 100%;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
border-radius: 18px;
`

export const CardTournamentsWrapper = styled.div`
padding:180px 0 0 10px;
display: flex;
flex-wrap: nowrap;
overflow-x: scroll;
gap:20px;
`
export const CardTournamentWrapper = styled.div`
`
