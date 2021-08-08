import TopMenu from './TopMenu';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div>
            <TopMenu/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
