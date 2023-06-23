import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { apiCaller } from "../../redux/query";
import Cookies from "universal-cookie";
import { AuthStyled } from "./styled";
import { useEffect } from "react";
import { PATH } from "../../constant";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const afterOnYear = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
);
const LoginPage = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const isAuthentication = cookies.get("isAuthentication");
  const [handleLogin] = apiCaller.useLoginMutation();
  const onFinish = (values: any) => {
    handleLogin(values.user).then((res) => {
      if ("data" in res) {
        cookies.set("accessToken", res.data.accessToken, {
          expires: afterOnYear,
        });
        cookies.set("isAuthentication", true, { expires: afterOnYear });
        navigate(PATH.home);
      }
    });
  };
  useEffect(() => {
    if (isAuthentication) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthStyled>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name={["user", "username"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
          validateTrigger="onBlur"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "password"]}
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          className="ml-16"
          type="link"
        >
          Register
        </Button>
      </Form>
    </AuthStyled>
  );
};

export default LoginPage;
