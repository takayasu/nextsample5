import { useState } from "react";

export type LoginProps = {
    onLogin: (credentials: {id: string, password: string}) => void;
}

const LoginForm: React.FC<LoginProps> = ({onLogin}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Login</h1>
            <input type="text" data-testid="id" placeholder="Username" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <input type="password" data-testid="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button data-testid="loginbutton" onClick={() => onLogin({id: id, password: password})}>Login</button>
        </div>
    );
};

export default LoginForm;