import Image from "next/image";
import style from "./style.module.css";
import styled from "styled-components";

const Card = styled.div`
  width: 350px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f4f4f4;
  margin-bottom: 10px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin: 5px;
    font-size: 16px;
  }
  p {
    margin: 5px;
    font-size: 13px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

const BottomCardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  color: cadetblue;
`;

const IMG = styled.div`
  margin-right: 20px;
`;

export function ItemCard({ cardTitle }: string) {
  console.log("itemCard", cardTitle);

  return (
    <Card>
      <div className="card_tags"></div>

      <CardText>
        <h4>{cardTitle}</h4>
        <p>
          Successful businesses know the importance of building and maintaining
          good working.
        </p>
      </CardText>
      <BottomCardContainer>
        <div>
          <Image
            src="/card/usersAdd/Users.svg"
            alt="icon"
            width={30}
            height={30}
          ></Image>
        </div>
        <Icons>
          <Icon>
            {0}
            <IMG>
              <Image
                src="/card/icons/message-square-outline.svg"
                alt="icon"
                width={20}
                height={20}
              ></Image>
            </IMG>
            {0}
            <IMG>
              <Image
                src="/card/icons/heart-outline.svg"
                alt="icon"
                width={20}
                height={20}
              ></Image>
            </IMG>
            {0}
            <IMG>
              <Image
                src="/card/icons/attach-outline.svg"
                alt="icon"
                width={20}
                height={20}
              ></Image>
            </IMG>
          </Icon>
        </Icons>
      </BottomCardContainer>
    </Card>
  );
}
