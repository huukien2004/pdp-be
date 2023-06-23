import styled from "styled-components";

export const EditProfileStyled = styled.div`
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
