"use client";

import styled from "styled-components";
import tabelCards from "@/store/tabelCards";
import { useState } from "react";
import NewCard from "../card/newCard";

const TableHeader = styled.div`
  width: 362px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
`;
interface Iprops {
  text: string;
}
export function TableItem({ text }: Iprops) {
  console.log("render tableItem");

  const [isEditable, setIsEditable] = useState(false);
  const [tableName, setTableName] = useState("");
  const tables = tabelCards.tables;
  const handleClick = () => {
    setIsEditable(true);
  };
  const handleBlur = () => {
    setIsEditable(false);
    tabelCards.addTable(tableName);
    setTableName("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      if (!text) text = "+ add new table";
      setIsEditable(false);
    }
    if (e.key === "Enter") {
      setIsEditable(false);
      tabelCards.addTable(e.target.value);
    }
  };

  return (
    <TableHeader onClick={handleClick}>
      {(isEditable && (
        <input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )) || <p>{text}</p>}
    </TableHeader>
  );
}
