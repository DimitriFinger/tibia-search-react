import axios from "axios";

export async function getCharacter(character) {
    console.log('character: ', character)

    const nickname = character.replaceAll(' ', '%20');
    console.log('nickname: ', nickname)
    const charData = await axios.get(`https://api.tibiadata.com/v3/character/${nickname}`)
    console.log('response:', charData.data);
    return true
}