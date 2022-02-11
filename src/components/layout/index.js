import Footer from '../footer';
import Header from '../header';

function Layout({ children }) {
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div class="body">
                { children }
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    ) 
}

export default Layout;