import { getData, putData, postData, deleteData } from "../../../apis/request";


export async function BlackList() {
    let access_token = localStorage.getItem('TOKEN');
    console.log("Token", access_token);
    const data = await postData('blacklisttoken/logout', { access_token: access_token });
    return data;
}

export async function getNotifications(limit) {
    const data = await getData(`notifications/list/${limit}`);
    return data;
}

export async function ReadAll(limit) {
    const data = await putData(`notifications/read/${limit}`);
    return data;
}