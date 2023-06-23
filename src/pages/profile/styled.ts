import styled from "styled-components";

export const HomePageStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 48px;
  .ant-descriptions {
    padding: 16px;
    max-width: 700px;
    height: fit-content;
    background-color: white;
    border-radius: 16px;
  }
  .btn-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    .ant-btn {
      padding: 8px 16px;
      height: 40px;
    }
  }
  .mr-8 {
    margin-right: 8px;
  }
`;
