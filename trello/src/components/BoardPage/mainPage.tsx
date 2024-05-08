"use client";
import { useState } from "react";
import { observer } from "mobx-react-lite";

import style from "./style.module.css";
import styled from "styled-components";

import tableCards from "../../store/tabelCards";
import NewCard from "../card/newCard";
import { TableComponent } from "../tableCard/table";

const MainBoard = styled.div`
  background-color: aqua;
  display: flex;
  overflow-y: auto;
`;

export const MainBoardPage = observer(() => {
  console.log("render");
  const tables = tableCards.tables;

  return (
    <MainBoard>
      <TableComponent />
    </MainBoard>
  );
});
