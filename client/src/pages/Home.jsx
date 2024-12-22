import React from 'react'
import Layout from '../layout/layout'
import Header from '../components/Header.jsx'
import SpecialityMenu from '../components/SpecialityMenu.jsx'
import TopDoctors from '../components/TopDoctors.jsx'
import Banner from '../components/Banner.jsx'

const Home = () => {
  return (
    <Layout>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </Layout>
  )
}

export default Home