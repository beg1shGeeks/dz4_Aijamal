import style from './basket.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BASKET_INCREMENT, BASKET_DICREMENT } from '../../../store/store';

const Basket = () => {
  const basketPorducts = useSelector((state) => state.basketCount);
  const dispatch = useDispatch();
  console.log(basketPorducts);
  const btnIncrement = (id) => {
    dispatch({ type: BASKET_INCREMENT, payload: id });
  };
  const btnDicrement = (id) => {
    dispatch({ type: BASKET_DICREMENT, payload: id });
  };

  return (
    <div className={style.container}>
      {basketPorducts &&
        basketPorducts.map((basketPorduct) => (
          <div className={style.bsketContainer} key={basketPorduct._id}>
            <img src={basketPorduct.picture} alt="" />
            <div>
              <div className={style.basketTitle}>
                <p>{basketPorduct.name}</p>
                <span>{basketPorduct.price}</span>
              </div>
              <div className={style.bsketBtnContainer}>
                <button
                  type="button"
                  onClick={() => btnDicrement(basketPorduct._id)}
                >
                  -
                </button>
                <span>{basketPorduct.countPorduct}</span>
                <button
                  type="button"
                  onClick={() => btnIncrement(basketPorduct._id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Basket;
