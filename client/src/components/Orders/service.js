import { getData, deleteData, postData, putData } from '../../apis/request';

export async function getOrderList() {
    try {
        const data = await getData(`Order/list`);
        return data;
    }
    catch (err) {
        return err;
    }
}

export async function UpdateOrder(body) {
    try {
        const data = await putData(`Order/updateOrder`, body);
        return data;
    }
    catch (err) {
        return err;
    }
}