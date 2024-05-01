import { Card } from "../Card/Card";
import *as S from "./Column.styled";

export const  Column = ({status, cards}) => {
      return (
          <S.MainColumn>
            <S.ColumnTitle>
              <p>{status}</p>
            </S.ColumnTitle>
            <S.StyledCard>
            {cards.map(
              (card, id) => (
                <Card
                  key={id}
                  CardTheme={card.theme}
                  CardTitle={card.title}
                  cardDate={card.date}
                />
              )
            )}
          </S.StyledCard>
          </S.MainColumn>
    )
}