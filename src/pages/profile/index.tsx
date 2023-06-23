import { Button, Descriptions } from "antd";
import { HomePageStyled } from "./styled";
import { apiCaller } from "../../redux/query";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant";

const HomePage = () => {
  const { data } = apiCaller.useGetUserQuery(undefined);
  const navigate = useNavigate();
  return (
    <HomePageStyled>
      {data && (
        <div>
          <Descriptions column={2} title="User Info">
            <Descriptions.Item label="Full Name">
              {data.firstname} {data.lastname}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
            <Descriptions.Item label="Birthday">
              {moment(data.birthday).format("DD/MM/YYYY")}
            </Descriptions.Item>
            <Descriptions.Item label="Phone number">
              {data.phoneNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {data.address}
            </Descriptions.Item>
            <Descriptions.Item label="Create At">
              {moment(data.createdAt).format("DD/MM/YYYY")}
            </Descriptions.Item>
            <Descriptions.Item label="Update At">
              {data.updateAt
                ? moment(data.updateAt).format("DD/MM/YYYY")
                : "---"}
            </Descriptions.Item>
          </Descriptions>
          <div className="btn-group">
            <Button
              className="mr-8"
              onClick={() => {
                navigate(PATH.changePassword);
              }}
            >
              Change password
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate(PATH.editProfile);
              }}
            >
              Edit profile
            </Button>
          </div>
        </div>
      )}
    </HomePageStyled>
  );
};

export default HomePage;
