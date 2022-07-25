import Head from "next/head";
import React, { ReactNode } from "react";
import styled from 'styled-components';
import Header from "./header/header";

type Props = {
    children?: ReactNode,
    title?: string
}

const Container = styled.div`
    margin-left: 20vw;
    margin-right: 30px;
`

const Content = styled.div`
    margin-top: 47.85px;
    margin-right: 18vw;
`

const Layout = ({ children, title = "Kauno Menininkų Namai"}: Props ) => {
    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} key="title" />
            </Head>
            <Header />
            <Container>
                <Content>{children}</Content>
            </Container>
        </React.Fragment>
    )
}

export default Layout