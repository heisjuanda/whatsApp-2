/* eslint-disable no-useless-escape */

export const REGISTER_FIELDS = [
    {
        id: 'fullNameR',
        label: 'Full Name',
        name: 'fullNameR',
        type:'text',
        placeHolder: 'Your name',
        validation: {
            required: true,
            pattern: `^(?!\s)[A-Za-z\s]+$`,
            maxLength: 20,
            minLength: 2,
        },
    },
    {
        id: 'emailR',
        label: 'Email address',
        name: 'emailR',
        type:'email',
        placeHolder: 'example@email.com',
        validation: {
            required: true,
            pattern: `^(?:[a-zA-Z\s]{2,20}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$`,
            maxLength: 60,
            minLength: 5,
        },
    },
    {
        id: 'passwordR',
        label: 'Password',
        name: 'passwordR',
        type:'password',
        placeHolder: 'A secred word',
        validation: {
            required: true,
            maxLength: 30,
            minLength: 8,
        },
    },
    {
        id: 'fileR',
        name: 'fileR',
        type:'file',
        htmlLabel: true
    },
    {
        id: 'sendR',
        text: 'Register',
        type: 'submit',
    },
];

export const LOGIN_FIELDS = [
    {
        id: 'emailL',
        label: 'Email address',
        name: 'emailL',
        type:'email',
        placeHolder: 'example@email.com',
        validation: {
            required: true,
            pattern: `^(?:[a-zA-Z\s]{2,20}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$`,
            maxLength: 60,
            minLength: 5,
        },
    },
    {
        id: 'passwordL',
        label: 'Password',
        name: 'passwordL',
        type:'password',
        placeHolder: 'Your secred word',
        validation: {
            required: true,
            maxLength: 30,
            minLength: 8,
        },
    },
    {
        id: 'sendL',
        text: 'Login',
        type: 'submit',
    },
];