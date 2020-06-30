import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

import "../RegisterForm/RegisterForm.scss";

export default function RegisterForm() {
  return (
          <Form className="register-form">
      <Form.Item >
        <Input
          type="email"
          name="email"
          placeholder="correo electronico"
          className="register-form__input"
        />
      </Form.Item>
    </Form>
  );
}
