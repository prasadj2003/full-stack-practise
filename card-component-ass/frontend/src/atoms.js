import {atom, selector} from "recoil";
import axios from "axios";


export const followSelector = selector({
    key: "followSelector",
    get: async () => {
        try {
          const response = await axios.get('http://localhost:3000/users');
          return response.data.followers;
        } catch (error) {
          console.error('Error fetching followers:', error);
          return []; // Return a default value in case of an error
        }
      }
});

export const likeSelector = selector({
    key: "likeSelector",
    get: async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            return response.data.likes;
        } catch (error) {
            console.log("Error fetching likes: ", error);
            return [];
        }
    }
});

export const followAtom = atom({
    key: "followAtom",
    default: followSelector
});

export const likeAtom = atom({
    key: "likeAtom",
    default: likeSelector
})