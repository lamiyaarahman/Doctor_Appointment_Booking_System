import React from 'react'
import Layout from '../layout/layout'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/banner'

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