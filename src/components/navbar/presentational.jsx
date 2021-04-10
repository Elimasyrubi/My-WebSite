import css from './css.module.scss'

const NavbarView = () => {
    return ( <div>
        <p className={css.title}>Eliezer</p>
        <button type='button'>Change theme</button>
    </div> );
}
 
export default NavbarView;