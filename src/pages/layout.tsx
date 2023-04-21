import React from 'react'
import { iChildrenNode } from '../typeDefs/childrenNode'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { View } from '../components/Common/View'


export default function Layout({ children }: iChildrenNode) {
  return (
    <View>
      <NavBar />
      {children}
      <Footer />
    </View>
  )
}
