import {atom} from "recoil"

export const countAtom = atom({
    key: "countAtom", // unique way to identigy the atom
    default: 0
})