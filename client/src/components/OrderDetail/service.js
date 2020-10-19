import { getData, deleteData, postData, putData } from '../../apis/request';


export async function getOrderDetailList(id) {
    try {
        const data = await getData(`orderdetail/list/${id}`);

        return data;
    }
    catch (err) {
        return err;
    }
}
