import { RenderResult, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginHookForm from "./LoginHookForm";

describe('Login HookForm', () => {

    const user= userEvent.setup();

    test('正しくレンダリングされている',async () => {
       const onLogin = jest.fn();
       
       const result: RenderResult = render(<LoginHookForm onSubmit={onLogin} />);
        expect(result.getByTestId('id')).toBeInTheDocument();
        expect(result.getByTestId('password')).toHaveAttribute('type', 'password');
        expect(result.getByRole('button', {name: 'Login'})).toBeInTheDocument();
    });

    test('入力したログイン情報が取得できる',async () => {
        const onLogin = jest.fn();
        
        const result: RenderResult = render(<LoginHookForm onSubmit={onLogin} />);

        const id = result.getByTestId('id');
        await user.type(id, 'testuser');

        const password = result.getByTestId('password');
        await user.type(password, 'testpassword');
        const button = result.getByRole('button', {name: 'Login'});
        // await fireEvent.submit(result.getByRole("button"))
        button.click();

        await waitFor(() => expect(onLogin).toHaveBeenCalled());
        expect(onLogin.mock.calls[0][0]).toEqual({id: 'testuser', password: 'testpassword'});
     });

    test('IDしか入力されてないのでバリデーションエラー',async () => {
        const onLogin = jest.fn();
        
        const result: RenderResult = render(<LoginHookForm onSubmit={onLogin} />);
        const id = result.getByTestId('id');
        await user.type(id, 'testuser');
        const button = result.getByRole('button', {name: 'Login'});
        button.click();
        // result.rerender(<LoginHookForm onSubmit={onLogin} />)

        const invalidPassword = await result.findByText('Passwordは必須です');
        expect(invalidPassword).toBeInTheDocument();
        expect(onLogin).not.toHaveBeenCalled();
     });

     test('Passwordしか入力されてないのでバリデーションエラー',async () => {
        const onLogin = jest.fn();
        
        const result: RenderResult = render(<LoginHookForm onSubmit={onLogin} />);
        const password = result.getByTestId('password');
        await user.type(password, 'testPassword');
        const button = result.getByRole('button', {name: 'Login'});
        button.click();
        // result.rerender(<LoginHookForm onSubmit={onLogin} />)

        const invalidId = await result.findByText('IDは必須です');
        expect(invalidId).toBeInTheDocument();
        expect(onLogin).not.toHaveBeenCalled();
     });

     test('何も入力されてないのでバリデーションエラー',async () => {
        const onLogin = jest.fn();
        
        const result: RenderResult = render(<LoginHookForm onSubmit={onLogin} />);
        const button = result.getByRole('button', {name: 'Login'});
        button.click();
        // result.rerender(<LoginHookForm onSubmit={onLogin} />)

        const invalidId = await result.findByText('IDは必須です');
        expect(invalidId).toBeInTheDocument();
        expect(onLogin).not.toHaveBeenCalled();

        const invalidPassword = await result.findByText('Passwordは必須です');
        expect(invalidPassword).toBeInTheDocument();
        expect(onLogin).not.toHaveBeenCalled();
     });
});