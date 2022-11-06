import React from 'react'
import moment from 'moment'
import * as Styled from './TournamentStyled'




const Tournament = (props) => {
    const { data } = props;
    const prizeIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzMCAxOCI+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMC41IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDlkZWZmIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAuODU1IiBzdG9wLWNvbG9yPSIjNWI2NjcxIiBzdG9wLW9wYWNpdHk9IjAiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzMjIzMiIgc3RvcC1vcGFjaXR5PSIwIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iR3JvdXBfMzEyNTciIGRhdGEtbmFtZT0iR3JvdXAgMzEyNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODYuMzk2IC00MDQuNTUzKSI+DQogICAgPGcgaWQ9Ikdyb3VwXzMxMjYwIiBkYXRhLW5hbWU9Ikdyb3VwIDMxMjYwIj4NCiAgICAgIDxwYXRoIGlkPSJSZWN0YW5nbGVfNjA4OCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNjA4OCIgZD0iTTEsMEg3QTEsMSwwLDAsMSw4LDFWMTJhMCwwLDAsMCwxLDAsMEgwYTAsMCwwLDAsMSwwLDBWMUExLDEsMCwwLDEsMSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg2LjM5NiA0MTAuNTUzKSIgb3BhY2l0eT0iMC4zMSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+DQogICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzYwODhfLV9PdXRsaW5lIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDg4IC0gT3V0bGluZSIgZD0iTTEsMVYxMUg3VjFIMU0xLDBIN0ExLDEsMCwwLDEsOCwxVjEySDBWMUExLDEsMCwwLDEsMSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg2LjM5NiA0MTAuNTUzKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+DQogICAgPC9nPg0KICAgIDxnIGlkPSJHcm91cF8zMTI1OCIgZGF0YS1uYW1lPSJHcm91cCAzMTI1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAyKSI+DQogICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzYwODkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDYwODkiIGQ9Ik0xLDBIOWExLDEsMCwwLDEsMSwxVjE4YTAsMCwwLDAsMSwwLDBIMGEwLDAsMCwwLDEsMCwwVjFBMSwxLDAsMCwxLDEsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5Ny4zOTcgNDA0LjU1MykiIG9wYWNpdHk9IjAuMzEiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV82MDg5Xy1fT3V0bGluZSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNjA4OSAtIE91dGxpbmUiIGQ9Ik0xLjI1LDFWMTdoNy41VjFIMS4yNW0wLTFoNy41QTEuMTQ2LDEuMTQ2LDAsMCwxLDEwLDFWMThIMFYxQTEuMTQ2LDEuMTQ2LDAsMCwxLDEuMjUsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5Ny4zOTYgNDA0LjU1MykiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KICAgIDwvZz4NCiAgICA8ZyBpZD0iR3JvdXBfMzEyNTkiIGRhdGEtbmFtZT0iR3JvdXAgMzEyNTkiPg0KICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV82MDkwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDkwIiBkPSJNMSwwSDdBMSwxLDAsMCwxLDgsMVY5QTAsMCwwLDAsMSw4LDlIMEEwLDAsMCwwLDEsMCw5VjFBMSwxLDAsMCwxLDEsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwOC4zOTYgNDEzLjU1MykiIG9wYWNpdHk9IjAuMzEiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV82MDkwXy1fT3V0bGluZSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNjA5MCAtIE91dGxpbmUiIGQ9Ik0xLDFWOEg3VjFIMU0xLDBIN0ExLDEsMCwwLDEsOCwxVjlIMFYxQTEsMSwwLDAsMSwxLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDguMzk2IDQxMy41NTMpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K'
    const arrow = 'data:image/svg+xml;base64,PHN2ZyBpZD0ibmV4dF8xXyIgZGF0YS1uYW1lPSJuZXh0ICgxKSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNjY3IiB5MT0iMC41IiB4Mj0iLTAuMTUiIHkyPSIwLjUiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y4OTMxZSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmUxYzZiIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0iUGF0aF80MDAzMSIgZGF0YS1uYW1lPSJQYXRoIDQwMDMxIiBkPSJNMTAsMEExMCwxMCwwLDEsMCwyMCwxMCwxMC4wMTEsMTAuMDExLDAsMCwwLDEwLDBabTAsMTguMTgyQTguMTgyLDguMTgyLDAsMSwxLDE4LjE4MiwxMCw4LjE5MSw4LjE5MSwwLDAsMSwxMCwxOC4xODJaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4NCiAgPHBhdGggaWQ9IlBhdGhfNDAwMzIiIGRhdGEtbmFtZT0iUGF0aCA0MDAzMiIgZD0iTTg2LjQsOTAuMjY4YS45MDkuOTA5LDAsMCwwLTEuMjg2LDEuMjg2TDg3LjIsOTMuNjM5aC02LjI5YS45MDkuOTA5LDAsMCwwLDAsMS44MThIODcuMmwtMi4wODQsMi4wODRBLjkwOS45MDksMCwxLDAsODYuNCw5OC44MjdsMy42MzYtMy42MzZhLjkwOS45MDksMCwwLDAsMC0xLjI4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NS4xNTEgLTg0LjU0OCkiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo='

    console.log(data)

    return (
        <Styled.TournamentContainer>
            <Styled.ActiveCard>
                <Styled.ActiveCardText active={data.activated}>{data.activated ? 'activ acum' : 'inactiv'}</Styled.ActiveCardText>
            </Styled.ActiveCard>
            <Styled.ActivePeriod>
                <Styled.ActivePeriodText>{moment.unix(data.start_date).format('DD MMM')} - {moment.unix(data.end_date).format('DD MMM')}</Styled.ActivePeriodText>
            </Styled.ActivePeriod>

            <Styled.TournamentCard>
                <Styled.TournamentCardHeader>
                    <Styled.TournamentCardHeaderIcon src={data.meta.ui.corner_image.url} />
                    <Styled.TournamentCardHeaderWrapper>
                        <Styled.TournamentCardHeaderIcon src={prizeIcon} />
                        <Styled.TournamentCardHeaderText>Premii surpriza</Styled.TournamentCardHeaderText>
                    </Styled.TournamentCardHeaderWrapper>
                </Styled.TournamentCardHeader>
                <Styled.TournamentTitle>{data.name}</Styled.TournamentTitle>
                <Styled.TournamentInfoContainer>
                    <Styled.TournamentInfoWrapper>
                        <Styled.TournamentInfoIcon src={data.meta.ui.games_image.url} />
                        <Styled.TournamentInfoText>+{data.meta.games.length} jocuri</Styled.TournamentInfoText>
                    </Styled.TournamentInfoWrapper>
                    <Styled.TournamentInfoWrapper>
                        <Styled.TournamentInfoIcon src={data.meta.ui.current_place_image.url} />
                        <Styled.TournamentInfoText>TOP 200</Styled.TournamentInfoText>
                    </Styled.TournamentInfoWrapper>
                </Styled.TournamentInfoContainer>
                <Styled.TournamentEnrollContainer>
                    <Styled.TournamentEnrollText>
                        {data.enrolled ? 'Esti inscris' : 'Nu esti inca inscris'}
                    </Styled.TournamentEnrollText>
                </Styled.TournamentEnrollContainer>
                <Styled.TournamentParticipateContainer>

                    participa
                </Styled.TournamentParticipateContainer>
            </Styled.TournamentCard>
            <Styled.TournamentDetailsWrapper>
                <Styled.TournamentDetailsText>detalii turneu</Styled.TournamentDetailsText>
                <Styled.TournamentDetailsIcon src={arrow} />
            </Styled.TournamentDetailsWrapper>
        </Styled.TournamentContainer>
    )
}

export default Tournament