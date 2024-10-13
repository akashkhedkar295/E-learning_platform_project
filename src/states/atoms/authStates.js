import {atom} from 'recoil'

export const authLoginState = atom({
    key: 'authLogin',
    default: 'login',
});