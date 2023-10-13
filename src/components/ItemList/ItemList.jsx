import "./ItemList.css";

const ItemList = ({ itemsAry, cardColor }) => {
  return (
    <ul className="list">
      {itemsAry.map((item) => (
        <li
          className="item"
          key={item?._id}
          style={{ backgroundColor: cardColor }}
        >
          <h2>{item?.description}</h2>
          <div>
            <b>Amount: </b>
            {item?.amount}
          </div>
          <div>
            <b>Category: </b>
            {item?.category}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
