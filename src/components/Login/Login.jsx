import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";

import { LOGIN_FIELDS } from "../../constants";

export const Login = () => {

    const changeSection = {
        text: "Don't have an account?",
        urlText: 'Sign in here',
        url: '/register'
    };

    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new window.FormData(e.target));

        const email = data.emailL;
        const password = data.passwordL;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <section>
            <Modal
                showClose={false}
                child={
                    <Form submitFunc={handleSubmitLogin} fields={LOGIN_FIELDS} changeSection={changeSection} />
                }
            />
        </section>
    );
};