"use client";

import { useState, useEffect } from "react";

import tabelCards from "@/store/tabelCards";
import { TableItem } from "./tableItem";

import styled from "styled-components";
import { observer } from "mobx-react-lite";
import NewCard from "../card/newCard";

const TableLyout = styled.div`
  display: flex;
  gap: 10px;
`;

const TableColumn = styled.div`
  width: 370px;
  height: 100vh;
  overflow: auto;
`;

const NewTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 1px;
  width: 362px;
  height: 50px;
`;

export const TableComponent = observer(() => {
  let tbCard = tabelCards.tables;
  console.log("reder table");
  console.log("tbCard", tbCard.length);

  return (
    <>
      <TableLyout>
        {tbCard.map((elment, index) => (
          <TableColumn key={index}>
            <TableItem key={index} text={elment.tableName} />
            <NewCard key={index} />
          </TableColumn>
        ))}
        <TableItem text={"+ add new table"} />
      </TableLyout>
    </>
  );
});
