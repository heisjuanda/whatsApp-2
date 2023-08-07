import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";

import { LOGIN_FIELDS } from "../../constants";

export const Login = () => {

    const changeSection = {
        text: "Don't have an account?",
        urlText: 'Sign in here',
        url: '/'
    };

    const handleSubmitLogin = (e) => {
        const data = Object.fromEntries(new window.FormData(e.target));
        console.log(data);
    };

    return (
        <section>
            <Modal 
                showClose={false}
                child={
                    <Form submitFunc={handleSubmitLogin} fields={LOGIN_FIELDS} changeSection={changeSection}/>
                }
            />
        </section>
    );
};