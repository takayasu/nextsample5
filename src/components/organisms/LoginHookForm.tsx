import { type } from "os";
import { useForm } from "react-hook-form";

export type Login = {
    id: string;
    password: string;
};

const LoginHookForm = (props: {onSubmit: (data:Login)=> void}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Login>();

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <input data-testid="id" defaultValue="" {...register("id", { required: true })} />
                {errors.id && <span data-testid="invalidId">IDは必須です</span>}
                <input data-testid="password" type="password" defaultValue="" {...register("password", { required: true })} />
                {errors.password && <span data-testid="invalidPassword">Passwordは必須です</span>}
                <input type="submit" value="Login" />
            </form>
        </>
    );
};

export default LoginHookForm;
