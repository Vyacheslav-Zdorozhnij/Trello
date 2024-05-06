"use client";
import Image from "next/image";
import style from "./heder.module.css";
export function Header2Component() {
  return (
    <div className={style.header}>
      <p>Brackets</p>
      <div className={style.iconContainer}>
        <Image
          src="/header2-icons/Heart.svg"
          width={19}
          height={19}
          alt={"hard"}
        ></Image>

        <Image
          src="/header2-icons/Public.svg"
          width={88}
          height={35}
          alt={"hard"}
        ></Image>
        <Image
          src="/header2-icons/Hard.svg"
          width={30}
          height={35}
          alt={"hard"}
        ></Image>
      </div>
      <div className={style.userMenu}>
        <Image
          src="/header2-icons/Users.svg"
          width={140}
          height={40}
          alt={"hard"}
        ></Image>
        <button>Menu</button>
      </div>
    </div>
  );
}
