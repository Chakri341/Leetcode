import { atom } from "recoil";

type AuthModalAtomType = {
    isOpen: boolean;
    type: 'login' | 'signup' | 'reset'
}


const initialAuthModalAtom: AuthModalAtomType = {
    isOpen: false,
    type: 'login'
}

export const AuthModalAtom = atom<AuthModalAtomType>({
    key: "authModalState",
    default: initialAuthModalAtom,
})




