"use client"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { ChildrenProps } from '@/types/children'
import Container from '../Container/Container'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'


function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <div className='page'>
                    <Container>
                        {children}
                    </Container>
                </div>
                <Footer />
            </Provider>
        </>
    )
}

export default Layout