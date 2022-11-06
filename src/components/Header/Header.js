import React from 'react'

import * as Styled from './HeaderStyled'

import cameraIcon from '../../assets/cameraIcon.svg'
import logoIcon from '../../assets/logoIcon.svg'

const Header = () => {

    const titleImg = 'https://h6v9r7t5.stackpathcdn.com/public/logos/MOBILE_BRAND_LOGO/img-logo-winner@3x.1616776633.png'
    return (
        <Styled.HeaderContainer>
            <Styled.HeaderLogoWrapper>
                {/* <Styled.HeaderLogo src={logoIcon}/> */}
                {/* I tried to use the img tag with the svg code in the source but it displayed a broken img */}
                <svg width="39.557" height="42.303" viewBox="0 0 39.557 42.303" class="winner-hamburger">
                    <g id="hamburger-menu-winner" transform="translate(9.105 17.418)">
                        <g id="Group_12535" data-name="Group 12535" transform="translate(0 4)">
                            <circle id="Ellipse_408" data-name="Ellipse 408" cx="2.5" cy="2.5" r="2.5" transform="translate(-0.228 15.885)" fill="#e5e5e5"></circle>
                            <circle id="Ellipse_409" data-name="Ellipse 409" cx="2.5" cy="2.5" r="2.5" transform="translate(8.173 15.885)" fill="#e5e5e5"></circle>
                            <circle id="Ellipse_410" data-name="Ellipse 410" cx="2.5" cy="2.5" r="2.5" transform="translate(16.574 15.885)" fill="#e5e5e5"></circle>
                        </g>
                        <g id="Group_12534" data-name="Group 12534" transform="translate(-5.433 -6.416)">
                            <g id="Group_12513" data-name="Group 12513" transform="translate(-3.672 -11.002)">
                                <path id="Path_16882" data-name="Path 16882" d="M234.648,257.546a8.4,8.4,0,0,1-.555,1.44,20.8,20.8,0,0,1-3.171,3.374,44.285,44.285,0,0,1-4.59,3.466c1.086-2.709,2.017-5.478,2.832-8.28Zm-12.173-4.036c1.581-.329,2.956-.539,4.292-.693a24.993,24.993,0,0,1,2.816-.179,14.313,14.313,0,0,1,3.319.323,6.918,6.918,0,0,1,2.681,1.174c.195.155.222.141.215-.09a4.224,4.224,0,0,0-.063-.556,2.945,2.945,0,0,0-1.378-2.045,4.717,4.717,0,0,0-2.053-.621,10.873,10.873,0,0,0-3.4.258,36.108,36.108,0,0,0-6.23,2.018c-.09.036-.18.073-.271.108C222.071,253.335,221.918,253.626,222.475,253.51Zm-2.421,15.738,1.7-4.453h.027l.045,3.78c.737-.439,1.433-.857,2.126-1.271.771-.46,1.535-.915,2.255-1.409l-.078-6.2c-.023-1.864-.33-2.151-1.66-2.151h-2.322c-1.515,0-1.685.187-2.217,1.592l-2.628,6.933h-.027q-.054-2.09,0-4.154t.217-4.371h-5.538a70.263,70.263,0,0,0,.108,7.29q.179,2.714.431,5.173a18.382,18.382,0,0,0-3.046,1.949c-2.3,1.881-.531,1.629,1.209,1.3a37.428,37.428,0,0,0,9-3.478A.924.924,0,0,0,220.054,269.248Z" transform="translate(-208.347 -242.678)" fill="#fff" fill-rule="evenodd"></path>
                                <path id="Path_16883" data-name="Path 16883" d="M404.161,203.212a3.4,3.4,0,1,1-3.4,3.4,3.4,3.4,0,0,1,3.4-3.4" transform="translate(-368.004 -203.212)" fill="#e50019" fill-rule="evenodd"></path>
                                <path id="Path_16884" data-name="Path 16884" d="M264.9,246.288a6.554,6.554,0,0,1,2.565,1.248,4.079,4.079,0,0,1,1.438,2.874,10.708,10.708,0,0,1-1.823,6.584,19.85,19.85,0,0,1-2.845,3.419c-4.979,4.794-13.189,8.411-22.4,10.557-.549.1-.451-.188-.072-.3a62.52,62.52,0,0,0,14.11-7.065,37.487,37.487,0,0,0,5.28-4.291,23.851,23.851,0,0,0,2.55-3.006,11.061,11.061,0,0,0,2.191-5.73c.081-1.5-.2-3.134-1.25-3.978-.114-.105-.27-.208-.359-.276s-.114-.1-.1-.136.083-.039.228-.011.347.079.484.115" transform="translate(-235.818 -238.842)" fill="#e50019" fill-rule="evenodd"></path>
                            </g>
                            <g id="Group_12515" data-name="Group 12515" transform="translate(17.544 16.555)">
                                <g id="Group_12443" data-name="Group 12443" transform="translate(0 0)">
                                    <path id="Path_16880" data-name="Path 16880" d="M404.924,323.25q-.238.661-.529,1.3-.186.41-.393.828c-.2.411-.278.474-.665.474h-.388c-.3,0-.365-.067-.369-.358l-.011-.919h0l-.3.774c-.172.452-.21.5-.632.5h-.476c-.186,0-.276-.141-.308-.482q-.036-.378-.063-.787a12.88,12.88,0,0,1-.02-1.334h1.014q-.03.422-.04.8t0,.76h.005l.465-1.227c.117-.31.154-.333.5-.333h.265c.326,0,.385.027.385.489l.013,1.071h0q.169-.417.3-.792t.241-.768Zm1.025,2.6h-1.014l.358-1.829h-.318l.272-.775h.683c.51,0,.521.028.394.68Zm3.276-1.9q0,.08,0,.164a1.083,1.083,0,0,1-.025.174l-.3,1.56h-1.014l.283-1.446a1.274,1.274,0,0,0,.02-.127q0-.052,0-.092,0-.194-.129-.194a.259.259,0,0,0-.154.06.7.7,0,0,0-.149.159,1.383,1.383,0,0,0-.127.226,1.138,1.138,0,0,0-.082.261l-.224,1.153h-1.014l.507-2.6h.76l.025.308a1.1,1.1,0,0,1,.355-.288,1.038,1.038,0,0,1,.484-.109.787.787,0,0,1,.581.2A.8.8,0,0,1,409.226,323.956Zm2.928,0q0,.08,0,.164a1.118,1.118,0,0,1-.025.174l-.3,1.56h-1.014l.283-1.446a1.274,1.274,0,0,0,.02-.127q0-.052,0-.092,0-.194-.129-.194a.259.259,0,0,0-.154.06.7.7,0,0,0-.149.159,1.384,1.384,0,0,0-.127.226,1.138,1.138,0,0,0-.082.261l-.224,1.153h-1.013l.507-2.6h.76l.025.308a1.1,1.1,0,0,1,.355-.288,1.038,1.038,0,0,1,.484-.109.786.786,0,0,1,.581.2A.8.8,0,0,1,412.154,323.956Zm1.865.045a.142.142,0,0,0-.05-.109.186.186,0,0,0-.129-.045.345.345,0,0,0-.278.124.694.694,0,0,0-.144.293,1.388,1.388,0,0,0,.288-.025.712.712,0,0,0,.184-.062.256.256,0,0,0,.1-.084A.171.171,0,0,0,414.019,324Zm.954-.084a.782.782,0,0,1-.01.124l-.01.051a.783.783,0,0,1-.067.183.823.823,0,0,1-.283.3,1.716,1.716,0,0,1-.514.216,3.536,3.536,0,0,1-.78.1.48.48,0,0,0-.01.094.172.172,0,0,0,.089.166.715.715,0,0,0,.308.047,1.932,1.932,0,0,0,.209-.012q.114-.012.229-.03a2.546,2.546,0,0,0,.39-.1l.107.694a3.26,3.26,0,0,1-.592.153q-.139.02-.278.03t-.268.01a2.721,2.721,0,0,1-.527-.045.932.932,0,0,1-.373-.154.648.648,0,0,1-.221-.293,1.261,1.261,0,0,1-.072-.457,2.706,2.706,0,0,1,.03-.385,2.047,2.047,0,0,1,.1-.41,1.99,1.99,0,0,1,.194-.39,1.373,1.373,0,0,1,.3-.33,1.437,1.437,0,0,1,.422-.231,1.948,1.948,0,0,1,1.073-.022.956.956,0,0,1,.328.169.566.566,0,0,1,.174.241A.815.815,0,0,1,414.973,323.916Zm1.888.253a1.1,1.1,0,0,0-.112-.02.969.969,0,0,0-.132-.01.369.369,0,0,0-.3.161,1.1,1.1,0,0,0-.186.475l-.209,1.078h-1.014l.507-2.6h.76l.025.348a1.651,1.651,0,0,1,.33-.328.63.63,0,0,1,.37-.109q.1,0,.154.005a.309.309,0,0,1,.079.015Z" transform="translate(-400.762 -322.018)" fill="#fff"></path>
                                    <path id="Path_16881" data-name="Path 16881" d="M469.361,307.421a.566.566,0,0,1-.174.447.621.621,0,0,1-.427.154.551.551,0,0,1-.4-.142.485.485,0,0,1-.147-.365.652.652,0,0,1,.047-.256.523.523,0,0,1,.129-.186.57.57,0,0,1,.191-.114.678.678,0,0,1,.233-.04.551.551,0,0,1,.4.142.479.479,0,0,1,.147.36" transform="translate(-463.467 -306.919)" fill="#e50019"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

            </Styled.HeaderLogoWrapper>
            <Styled.HeaderTitleWrapper>
                <Styled.HeaderTitle src={titleImg} />
            </Styled.HeaderTitleWrapper>
            <Styled.HeaderButtonsWrapper>
                <Styled.HeaderButton type='new'>cont nou</Styled.HeaderButton>
                <Styled.HeaderButton type='log'>conectare</Styled.HeaderButton>
                <Styled.HeaderButton type='camera'>
                    <Styled.HeaderButtonIcon src={cameraIcon} />
                </Styled.HeaderButton>
            </Styled.HeaderButtonsWrapper>
        </Styled.HeaderContainer >
    )
}

export default Header