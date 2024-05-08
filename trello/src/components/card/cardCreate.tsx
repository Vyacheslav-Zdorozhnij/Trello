import { useState } from "react";
import { ItemCard } from "./itemCard";
import styled from "styled-components";

const CardCreateContainer = styled.div`
  display: flex;
  width: 365px;
  height: 120px;
  border-radius: 14px;
  align-items: center;
  background-color: cornflowerblue;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  button {
    height: 35px;
  }
`;

const Input = styled.input`
  width: 280px;
  height: 80px;
  border-radius: 10px;
  border: 1px;
  margin-left: 14px;
`;
export function CardCreate({ setIsShow, setAddNewCard, addNewCard }) {
  const [cardValue, setCardValue] = useState("");
  const createCard = () => {
    setIsShow(false);
    setAddNewCard([...addNewCard, <ItemCard cardTitle={cardValue} />]);
    setCardValue("");
  };
  const cansleCard = () => {
    setIsShow(false);
    setCardValue("");
  };
  return (
    <CardCreateContainer>
      <Input
        type="text"
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
      />
      <ButtonContainer>
        <button onClick={createCard}>create card</button>
        <button onClick={cansleCard}>X</button>
      </ButtonContainer>
    </CardCreateContainer>
  );
}
