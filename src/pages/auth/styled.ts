import { styled } from "styled-components";

export const AuthStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80");
  form {
    min-width: 700px;
    .ant-form-item-label {
      display: flex;
      justify-content: start;
    }
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: start;
    }
  }
  .ml-16 {
    margin-left: 16px;
  }
`;

export const ChangePasswordStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 700px;
    padding: 32px;
    background-color: white;
    border-radius: 16px;
    .ant-form-item-control-input {
      .ant-input-password {
        height: 40px;
      }
    }
  }
`;
