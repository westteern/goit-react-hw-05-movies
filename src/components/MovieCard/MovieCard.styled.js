import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;
  margin-right: 20px;
`;

export const InfoList = styled.div`
  border-bottom: 2px solid grey;
`;

export const GoBackBtn = styled.button`
  margin-right: auto;
  padding: 0;
  border-radius: 2px;
  background-color: #ff9999;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 200px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &: focus {
    background-color: #303f9f;
  }
`;
