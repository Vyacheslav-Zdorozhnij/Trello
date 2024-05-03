"use client";
import Image from "next/image";
import style from "./heder.module.css";
export function HederComponent() {
  return (
    <header>
      <Image src="/Logo.svg" alt="logo" width={75.83} height={30} />
      <div className="trello-mark">
        <Image
          src="/trello-mark-blue.svg"
          alt="trello-mark"
          width={24}
          height={24}
        />
        <p>Boards</p>
      </div>
      <div className={style.search_item}>
        <input type="text" className={style.input_search} />
        <Image src="search-outline.svg" alt="search" width={15} height={15} />
      </div>
      <div className={style.user_outline}>
        <Image
          src="/plus-circle-outline.svg"
          alt="user"
          width={20}
          height={20}
        />
        <Image
          src="/alert-circle-outline.svg"
          alt="user"
          width={20}
          height={20}
        />
        <Image src="/bell-outline.svg" alt="user" width={20} height={20} />
      </div>
    </header>
  );
}
