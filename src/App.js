import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import Banner from "./assets/images/hackathon.png";
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


function App() {
  const [isShowForm, setIsShowForm] = useState(true);
  const [name, setName] = useState("");
  const onFinish = (values) => {
    console.log('Success:', values);
    setName(values.name);
    setIsShowForm(false);
  };

  return (
    <div className="App">


      {
        isShowForm ? <div className="main">
          <h1>FORM ĐĂNG KÝ THẺ RA VÀO</h1>
          <div className="form">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ và tên!',
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item
                label="Công ty"
                name="company"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên công ty',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng số điện thoại',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>



        </div> : (
          <>
            <div className="banner">
              <img src={Banner} alt="" />
            </div>
            <header className="App-header">
              <p>Xin chào, {name}</p>
              <p>Dùng app Avaluch quét để nhận chứng chỉ ra vào sự kiện</p>
              <QRCodeCanvas
                id="qr-referral"
                value={`https://backend.hocptit.me/v1/issue-credential`}
                level={"H"}
                size={300}
              />
              <p>Scan QR để nhận thẻ ra vào sự kiện</p>
            </header>
          </>


        )
      }


    </div>
  );
}

export default App;
