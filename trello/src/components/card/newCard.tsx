"use client";
import React from "react";

import styled from "styled-components";
import tabelCards from "@/store/tabelCards";
import { ItemCard } from "./itemCard";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { CardCreate } from "./cardCreate";

const CardNew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 1px;
  width: 362px;
  height: 160px;
`;

export const NewCard = observer(() => {
  const [addNewCard, setAddNewCard] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const createNewCard = () => {
    setIsShow(true);
    // setAddNewCard([...addNewCard, <ItemCard />]);
    // tabelCards.addCard("red", "title", "description", 0, 0, 0);
    console.log(tabelCards.tables);
  };
  return (
    <>
      {addNewCard.length > 0
        ? addNewCard.map((card, index) => (
            <React.Fragment key={index}>{card}</React.Fragment>
          ))
        : ""}
      {isShow && (
        <CardCreate
          setIsShow={setIsShow}
          setAddNewCard={setAddNewCard}
          addNewCard={addNewCard}
        />
      )}
      <CardNew onClick={createNewCard}>
        <p>+ add new card</p>
      </CardNew>
    </>
  );
});
export default NewCard;

// display: flex;
// width: 370px;
// height: auto;
// align-items: center;
// background-color: cornflowerblue;

//input
// width: 280px;
// height: 75px;
// border-radius: 10px;
// border: 1px;
// margin-left: 14px;

// <div>
//   <input
//     type="text"
//     value={cardValue}
//     onChange={(e) => setCardValue(e.target.value)}
//   />
//   <div className="btns">
//     <button
//       onClick={() => {
//         setIsShow(false);
//         setAddNewCard([
//           ...addNewCard,
//           <ItemCard cardTitle={cardValue} />,
//           setCardValue(""),
//         ]);
//       }}
//     >
//       create card
//     </button>
//     <button
//       onClick={() => {
//         setIsShow(false);
//         setCardValue("");
//       }}
//     >
//       X
//     </button>
//   </div>
// </div>
