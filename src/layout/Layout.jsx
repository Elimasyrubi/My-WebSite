import Navbar from '../components/navbar/container';
import { useSelector } from 'react-redux';

function Layout(props) {

    const { scroll } = useSelector(({ appReducer }) => appReducer)
    return (
        <>
            {scroll > 0 && <Navbar fixed={true} />
            }
            {props.children}
        </>
    );
}

export default Layout;