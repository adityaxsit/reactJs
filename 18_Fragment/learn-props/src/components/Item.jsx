 import Styles from './Item.module.css';
const Item = ({foodItem,handleBuyButton}) => {
  return (
    <li className="list-group-item">
      {foodItem}
      <button className={ `${Styles.button}  btn btn-Info`} onClick={handleBuyButton}>Buy</button>
    </li>
  );
};

export default Item;