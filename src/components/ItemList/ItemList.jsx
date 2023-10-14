import "./ItemList.css";

const ItemList = ({ itemsAry, cardColor }) => {
  const getDate = (str) => {
    const date = new Date(str);
    const day = date.toLocaleString("en-IN", { day: "2-digit" });
    const month = date.toLocaleString("en-IN", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
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
            ₹{item?.amount}
          </div>
          <div>
            <b>Category: </b>
            {item?.category}
          </div>
          <div>
            <b>Date: </b>
            {getDate(item?.createdAt)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
