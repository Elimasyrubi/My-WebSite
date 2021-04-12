import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
//import { Loader } from '..';
import css from './css.module.scss';

const Modal = ({
    children,
    buttonsLocation,
    loading,
    buttons,
    withClose,
    avoidMaxWidth = false,
    onClose = () => {},
    errorModal = {},
}) => {


  //Reducers
  const {themeMode} = useSelector(({appReducer}) => appReducer)
  useEffect(
    () => {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('overflow-hidden');
      return () => {
        body.classList.remove('overflow-hidden');
      };
    },
    [],
  );

  function handleClickAway({ target: { classList } }) {
    if (classList.contains(css.container__modal)) {
      onClose();
    }
  }

  return ReactDOM.createPortal(
    <section className={css.container__modal} onClick={handleClickAway}>
      <div
      className={`
      ${themeMode === 'dark' && `${css['all-content']} ${css.backDark}`}
      ${themeMode === 'light' && `${css['all-content']} ${css.backLight}`}`}
        style={{
          ...(avoidMaxWidth ? {
            maxWidth: 'none',
          } : {}),
        }}
      >
        <div className={css['container__modal--content']}>
          { children }
        </div>
        {
          withClose && <i className={`fas fa-times ${css.closeButton}`} onClick={onClose} />
        }
        {
          buttons && (
            <div className={`${css['container__modal--actions']} ${css[buttonsLocation]}`}>
              {
              loading && (
                <div className={css.loaderContainer}>
                  <p>Loading</p>
                 {/*  <Loader /> */}
                </div>
              )
            }
              {
              errorModal.error && <p className={`${css['container__actions--item']}  ${css.errorModal}`}>{errorModal.message}</p>
            }
              <div className={`${css['container__actions--item']} ${css['container__list-buttons']}`}>
                {
                buttons.map((button) => (
                  <div
                    key={button.content}
                    className={css['container__list-buttons--item']}
                  >
                    <button
                      type="button"
                      className={css[button.styles]}
                      onClick={button.func}
                    >
                      {button.content}
                    </button>
                  </div>
                ))
              }
              </div>
            </div>
          )
        }
      </div>
    </section>,
    document.getElementById('modal'),
  );
};

export default Modal;
