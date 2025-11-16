import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { ChildrenProps } from '@/types/children'
import Container from '../Container/Container'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Navbar />
            <div className='page'>
                <Container>
                    {children}
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Layout