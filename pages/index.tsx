import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledTest = styled.h1`
  font-family: ${props => props.theme.titleFont};
  color: ${props => props.theme.colors.orange};
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KMN Svetainė</title>
        <meta name="description" content="Pagrindinis puslapis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Žaibiškas</h1>
      <StyledTest>Žaibiškas</StyledTest>
    </Layout>
  )
}