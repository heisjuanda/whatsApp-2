import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';

import { REGISTER_FIELDS } from '../../constants';

import './Register.css';

export const Register = () => {

    const changeSection = {
        text: 'Have an account?',
        urlText: 'Login here',
        url: '/login'
    };

    const handleSubmitRegister = (e) => {
        const data = Object.fromEntries(new window.FormData(e.target));
        console.log(data);
    };

    return (
        <section className='register-section'>
            <Modal showClose={false} child={(
                <Form submitFunc={handleSubmitRegister} changeSection={changeSection} fields={REGISTER_FIELDS}/>
            )} />
        </section>
    );
};