import { render, screen, RenderResult } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoginForm, { LoginProps } from "./LoginForm";

describe('LoginForm', () => {

    const user= userEvent.setup();

    test('正しくレンダリングされている', () => {
       const onLogin = jest.fn();
       const props: LoginProps = { onLogin };
       const result: RenderResult = render(<LoginForm {...props} />);
        expect(result.getByRole('heading', {name: 'Login'})).toBeInTheDocument();
        expect(result.getByTestId('id')).toBeInTheDocument();
        expect(result.getByTestId('password')).toHaveAttribute('type', 'password');
        expect(result.getByRole('button', {name: 'Login'})).toBeInTheDocument();
    });

    test('ボタンを押すとonLoginが呼ばれる', () => {
        const onLogin = jest.fn();
        const props: LoginProps = { onLogin };
        const result: RenderResult = render(<LoginForm {...props} />);
        const button = result.getByRole('button', {name: 'Login'});
        button.click();
        expect(onLogin).toHaveBeenCalled();
    });

    test('入力したログイン情報が取得できる', async () => {
        const onLogin = jest.fn();
        const props: LoginProps = { onLogin };
        const result: RenderResult = render(<LoginForm {...props} />);

        const id = result.getByTestId('id');
        await user.type(id, 'testuser');

        const password = result.getByTestId('password');
        await user.type(password, 'testpassword');

        const button = result.getByRole('button', {name: 'Login'});
        button.click();
        expect(onLogin.mock.calls[0][0]).toEqual({id: 'testuser', password: 'testpassword'});
    });
});