import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Button from "../Button/Button";
import Items from "../Items/Items";
import Counter from "../Counter/Counter";
import "./addTOCart.css";
const Addtocart = () => {
  const [itemPrice, setItemPrice] = useState({ item: [], price: [] });
  const clickHandler = (param1) => {
    return setItemPrice((itemPrice) => ({
      ...itemPrice,
      item: [...itemPrice.item, Items[param1].item],
      price: [...itemPrice.price, Items[param1].price],
    }));
  };

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const uniqueItem = itemPrice.item.filter(distinct);
  const uniquePrice = itemPrice.price.filter(distinct);

  // const removeItem = (index) => {
  //   //return setItemPrice((item) => {
  //   return uniqueItem.filter((index) => !index);
  //   //});
  // };
  let itemCount = itemPrice.item.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  let itemCountArr = [...itemCount.values()];

  return (
    <div className="row">
      <Header text="Add To Cart" />
      <div className="column">
        <table>
          <thead>
            <tr>
              <th>Item List</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Items).map((obj, i) => {
              return (
                <Fragment key={Items[obj].id}>
                  <tr>
                    <td>{Items[obj].item}</td>
                    <td>{Items[obj].price}</td>
                    <td>
                      <Button
                        className="addBtn"
                        text="ADD"
                        param1={Items[obj].id}
                        func={clickHandler}
                      />
                      {/* <Counter
                        id={Items[obj].id}
                        hideHeading="none"
                        hideMsg="none"
                        display={cartItemPrice.toggleCounter}
                      /> */}
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="column">
        <table>
          <thead>
            <tr>
              <th>Cart Item</th>
              <th> No Of Item({itemPrice.item.length})</th>
              <th>
                Price: ₹
                {itemPrice.price.reduce((a, b) => {
                  return Number(a) + Number(b);
                }, 0)}
              </th>
              {/* <th>Remove Item</th> */}
            </tr>
          </thead>
          <tbody>
            {uniqueItem.map((itemName, index) => {
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{itemName}</td>
                    <td>{itemCountArr[index]}</td>
                    <td> {itemCountArr[index] * uniquePrice[index]}</td>
                    {/* <td>
                      <button
                        onClick={() => {
                          removeItem(index);
                        }}
                      >
                        Remove
                      </button>
                    </td> */}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addtocart;
