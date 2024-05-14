import { keyframes } from "styled-components";
import styled from "styled-components";
 import { topicStyles } from "../../lib/topic.js";
 import { StyledCard } from "../Column/Column.styled";

 const cardAnimation = keyframes`
 0% {
     height: 0;
     opacity: 0;
   }
   100% {
     height: auto;
     opacity: 1;
   }
 `;
 
 export const CardItem = styled.div`
   padding: 5px;
   animation-name: ${cardAnimation};
   animation-duration: 500ms;
   animation-timing-function: linear;
 `;
 
 export const CardsCard = styled(StyledCard)`
   width: 220px;
   height: 130px;
   background-color: ${({theme})=> theme.primary};
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: stretch;
   padding: 15px 13px 19px;
 
   @media screen and (max-width: 1200px) {
     width: 220px;
     height: 130px;
     background-color: ${({theme})=> theme.primary};
     border-radius: 10px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: stretch;
     padding: 15px 13px 19px;
   }
 `;
 export const CardGroup = styled.div`
   width: 100%;
   height: 20px;
   margin-bottom: 12px;
   display: flex;
   align-items: center;
   justify-content: space-between;
 `;
 
 
 // ${(props)=>colorTheme};
 export const CardTheme = styled.div`
   width: auto;
   height: 20px;
   padding: 5px 14px;
   border-radius: 18px;
   ${(props)=>topicStyles[props.$color]};
 `;
 
 
 
 export const CardName = styled.p`
   font-size: 10px;
   font-weight: 600;
   line-height: 10px;
 
 `;
 
 export const CardBtn = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 2px;
 `;
 export const CardBtnDiv = styled(CardBtn)`
   width: 4px;
   height: 4px;
   border-radius: 50%;
   background-color: #94a6be;
 `;
 
 export const CardContent = styled.div`
   height: 64px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
 `;
 
 export const CardTitle = styled.h3`
   font-size: 14px;
   font-weight: 500;
   line-height: 18px;
   color: ${({theme})=> theme.text};
   margin-bottom: 10px;
 `;
 
 export const CardDate = styled.div`
   /* Frame 1511838628 */
   position: relative;
   width: 59px;
   height: 13px;
   gap: 6px;
   /* Автолейаут */
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-end;
   padding: 0px;
   color: rgb(148, 166, 190);
   font-family: Roboto;
   font-size: 10px;
   font-weight: 400;
   line-height: 12px;
   text-align: left;
 
   svg {
     width: 13px;
   }
 
   p {
     margin-left: 6px;
     font-size: 10px;
     line-height: 13px;
     color: #94A6BE;
     letter-spacing: 0.2px;
   }
 
 
 `;