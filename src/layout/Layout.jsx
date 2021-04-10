import Navbar from '../components/navbar/presentational';

function Layout (props){
    return(
        <>  
        <Navbar/>
        {props.children}
        </>
    );
}

export default Layout;