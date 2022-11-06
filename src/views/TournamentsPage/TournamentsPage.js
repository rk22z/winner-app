import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as Styled from './TournamentsPageStyled';
import Tournament from '../../components/Tournament/Tournament'

const TournamentsPage = () => {

    const baseUrl = 'https://micros1-ro.play-online.com';
    const [tournaments, setTournaments] = useState([])


    useEffect(() => {
        getTournaments()
    }, [])


    const getTournaments = () => {
        axios.get(baseUrl + `/missions/tournaments/list?tenant_id=2`)
            .then((response) => {
                let tempData = [...response.data]
                let tempTournaments = []
                tempData?.forEach((category) => {
                    category?.tournaments?.forEach((tournament) => tempTournaments = [...tempTournaments, tournament])
                })
                setTournaments(tempTournaments)
            })
    }


    return (
        <Styled.TournamentsPageContainer>
            <Styled.TournamentsPageTextWrapper>
                <Styled.TournamentsPageText type='subtitle'>Câștigi premii cash și alte surprize</Styled.TournamentsPageText>
                <Styled.TournamentsPageText type='title'>Turneul Winner</Styled.TournamentsPageText>
            </Styled.TournamentsPageTextWrapper>
            <Styled.TournamentsPageCardWrapper>
                <Styled.TournamentsPageCard>
                    <Styled.CardImage>
                        <Styled.CardTournamentsWrapper>
                            {tournaments?.map((tournament, index) => {
                                return (
                                    <Styled.CardTournamentWrapper key={`category--${index}`}>
                                        <Tournament data={tournament} />
                                    </Styled.CardTournamentWrapper>
                                )
                            })}
                        </Styled.CardTournamentsWrapper>
                    </Styled.CardImage>
                </Styled.TournamentsPageCard>
            </Styled.TournamentsPageCardWrapper>
        </Styled.TournamentsPageContainer>
    )
}

export default TournamentsPage