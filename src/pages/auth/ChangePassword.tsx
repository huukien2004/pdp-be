import { Input, Button, Form } from "antd";
import { ChangePasswordStyled } from "./styled";
import { apiCaller } from "../../redux/query";

export const ChangePassword = () => {
  const [form] = Form.useForm();
  const [action, status] = apiCaller.useChangePasswordMutation();
  const onFinish = (values: any) => {
    action(values);
  };
  return (
    <ChangePasswordStyled>
      <Form layout={"vertical"} form={form} onFinish={onFinish}>
        <Form.Item label="Old password" name="currentPassword">
          <Input.Password placeholder="enter current password" />
        </Form.Item>
        <Form.Item label="New password" name="newPassword">
          <Input.Password placeholder="enter new password" />
        </Form.Item>
        <Form.Item label="Confirm new password" name={"confirmPassword"}>
          <Input.Password placeholder="enter confirm password" />
        </Form.Item>
        <Form.Item>
          <Button loading={status.isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ChangePasswordStyled>
  );
};
