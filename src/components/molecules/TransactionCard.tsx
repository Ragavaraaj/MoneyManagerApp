import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import { IconSize } from "../../constants/Sizes";
import food from "../../icons/BigFoodIcon.svg";

const MainGrid = styled.div`
  display: grid;
  grid-template: auto / 60px 1fr 1fr;
  padding: 12px 10px;
  box-shadow: 6px 5px 2px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(100px);
  border-radius: 20px;
  margin: 0px 8px 5px 0px;
  gap: 15px;
  width: 100%;
`;

const DateGrid = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr 1fr / 1fr;
  gap: 3px;
`;

const AmountGrid = styled.div`
  display: inline-grid;
  grid-template: 20px 1fr / 1fr;
  gap: 5px;
  margin: 3px 5px;
`;

const DateTitleLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  justify-self: start;
  align-self: end;
`;

const DateLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
`;

const DescriptionLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  justify-self: start;
  align-self: start;
`;

const AmountTitleLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  justify-self: start;
  align-self: end;
`;

const AmountLabel = styled.label`
  font-size: 20px;
  line-height: 23px;
  justify-self: start;
  align-self: start;
  font-weight: bold;
`;

interface Props {
  date: string;
  amount: number;
  description: string;
}

const TransactionCard: React.FunctionComponent<Props> = props => {
  return (
    <MainGrid>
      <Icon size={IconSize.small} src={food} alt="food" />
      <DateGrid>
        <DateTitleLabel>Date</DateTitleLabel>
        <DateLabel>{props.date}</DateLabel>
        <DescriptionLabel>{props.description}</DescriptionLabel>
      </DateGrid>
      <AmountGrid>
        <AmountTitleLabel>Amount</AmountTitleLabel>
        <AmountLabel>${props.amount}</AmountLabel>
      </AmountGrid>
    </MainGrid>
  );
};

export default TransactionCard;
