import React from 'react';
import { display, styled } from '@mui/system';
import { Button } from '@mui/material';
import marvelImage from '../../assets/images/marvel_image.jpeg';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../SignIn';
import { useSigninCheck } from 'reactfire'; 

interface Props{
    title: string;
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    backgroundColor: 'red',
    margin: '2em',
    padding: '0',
    color: 'white',
    height: '50px',
    width: '240px',
    border: 'none',
    textAlign: 'center',
    boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
    fontSize: '16px',
    lineHeight: '48px',
    display: 'block',
    borderRadius: '1px',
    fontFamily: 'Roboto, arial, sans-serif',
    cursor: 'pointer'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${avengerMarvel});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = ( props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/">Marvel Inventory</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <GoogleButton />
                    </li>
                    <li>
                        <NavA to="/Dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="/signin">Sign In</NavA>
                    </li>
										<li>
                        <NavA to="/signup">Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>Greetings Avengers</h1>
                    <Button color='primary' variant='contained'>Meet the team</Button>
                </MainText>
            </Main>

        </Root>
    )
}