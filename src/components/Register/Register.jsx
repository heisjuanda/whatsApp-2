import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { auth, storage, db } from '../../firebase';

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

    const navigate = useNavigate();

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new window.FormData(e.target));

        const displayName = data.fullNameR;
        const email = data.emailR;
        const password = data.passwordR;
        const file = data.fileR;

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                const date = new Date().getTime();
                const storageRef = ref(storage, `${data.emailR + date}`);

                await uploadBytesResumable(storageRef, file)
                    .then(() => {
                        getDownloadURL(storageRef).then(async (downloadUrl) => {
                            try {
                                await updateProfile(userCredential.user, {
                                    displayName,
                                    photoURL: downloadUrl,
                                });
                                await setDoc(doc(db, 'users', userCredential.user.uid), {
                                    uid: userCredential.user.uid,
                                    displayName,
                                    email,
                                    photoURL: downloadUrl,
                                });
                                await setDoc(doc(db, "userChats", userCredential.user.uid), {});
                                navigate("/login");
                            } catch (err) {
                                console.log(err);
                            }
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <section className='register-section'>
            <Modal showClose={false} child={(
                <Form submitFunc={handleSubmitRegister} changeSection={changeSection} fields={REGISTER_FIELDS} />
            )} />
        </section>
    );
};