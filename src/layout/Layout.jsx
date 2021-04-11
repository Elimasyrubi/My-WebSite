//import Navbar from '../components/navbar/container';

function Layout (props){
    return(
        <>  
       {/*  <Navbar/> */}
        {props.children}
        </>
    );
}

export default Layout;