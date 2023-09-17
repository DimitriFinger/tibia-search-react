import axios from "axios";

export async function getCharacter(name) {
    const nickname = name.replaceAll(' ', '%20');
    const charData = await axios.get(`https://api.tibiadata.com/v3/character/${nickname}`);
    return charData.data.characters.character;
}