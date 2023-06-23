import { Input, Button, Form, DatePicker } from "antd";
import { EditProfileStyled } from "./styled";
import { apiCaller } from "../../../redux/query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";

export const EditProfile = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [action, status] = apiCaller.useEditProfileMutation();
  const { data } = apiCaller.useGetUserQuery(undefined);
  const onFinish = (values: any) => {
    action(values);
  };
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        birthday: moment(data.birthday),
      });
    }
  }, [data]);
  return (
    <EditProfileStyled>
      <Form
        layout={"horizontal"}
        labelCol={{ span: 8 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="First name" name="firstname">
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item label="Last name" name="lastname">
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <DatePicker style={{ width: "100%" }} placeholder="Birthday" />
        </Form.Item>
        <Form.Item label="Phone number" name="phoneNumber">
          <Input placeholder="Phone number" />
        </Form.Item>
        <Form.Item label="address" name="address">
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item>
          <Button style={{ marginRight: "16px" }} onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button loading={status.isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </EditProfileStyled>
  );
};
