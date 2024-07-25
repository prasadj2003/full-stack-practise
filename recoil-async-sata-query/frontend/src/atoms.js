import { atom, selector } from "recoil";
import axios from "axios"

export const allAtoms = atom({
    key: "allAtoms",
    default: selector({
        key: "allAtoms/default",
        get: async ({get}) => {
            // await new Promise(r => setTimeout(r, 5000)); --> uncomment to see how await is useful. This makes the function sleep from 5s.
            const allWords = await axios.get("http://localhost:3000");
            return allWords.data
        }
        
    })
})