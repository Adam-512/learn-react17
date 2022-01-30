import styled from '@emotion/styled';
import { Form, Input, Button, Checkbox, Card } from 'antd';

export const LoginPage = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <Title>测试系统</Title>
            <WrapCard>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </WrapCard>
        </Container>
    );
};

const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const WrapCard = styled(Card)`
    margin:0 auto;
    max-width:450px;
    box-shadow:0 0 10px 0 rgba(0,0,0,.2);
`

const Title = styled.h3`
    text-align:center;
    margin-bottom:20px;
    font-weight:bold;
    font-size:26px;
`