import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            <Menu/>            
            <Banner />  
            
            <main className="products">
            <section className="result">
            {children}
            </section>
            </main>

            <Footer />

        </div>
	)
}

export default Layout