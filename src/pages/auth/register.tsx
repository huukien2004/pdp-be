import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import { AuthStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { apiCaller } from "../../redux/query";
import { IRegisterParams } from "../../type/params";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const RegisterPage = () => {
  const [handleRegister] = apiCaller.useRegisterMutation();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values.user.birthday);
    handleRegister(values.user).then((res) => {
      if ("data" in res) {
        console.log(res.data);
      }
    });
  };
  return (
    <AuthStyled>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        validateTrigger="onBlur"
      >
        <Form.Item name={["user", "firstname"]} label="Firstname">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "lastname"]} label="LastName">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "password"]} label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={["user", "birthday"]}
          label="Birthday"
          rules={[{ type: "date" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name={["user", "phoneNumber"]} label="Phone number">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "address"]} label="Address">
          <Input />
        </Form.Item>
        <Button type="link" onClick={() => navigate("/login")}>
          Back to login
        </Button>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </AuthStyled>
  );
};

export default RegisterPage;
