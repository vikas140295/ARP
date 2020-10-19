import axios from "axios";

const API_BASE_PATH = "mongodb+srv://Waleed:125Gamer@cluster0.5fj84.mongodb.net/green?retryWrites=true&w=majority";

const productResourcePath = `/products`;
const ApiService = {
    /*
    Products : {
        getAll : async () => {
            const url = API_BASE_PATH + productResourcePath;
            return  axios.get(
                url 
            );
        },
        getByProductId : async(id) => {
            const url = `${API_BASE_PATH + productResourcePath}/${id}`
            return axios.get(
                url 
            );
        },
        getPopularProducts :  async (query) => {
            const url = `${API_BASE_PATH + productResourcePath}/popular`
            return  axios.get(
                url 
            );       
        },
        search :  async (query, page = 1, pageSize = 100, category = "") => {
            // console.log(query);
            const actionPath ='/search'
            const url = `${API_BASE_PATH+productResourcePath+actionPath}?page=${page}&size=${pageSize}&category=${category} `
            return  axios.get(
              url + (query ? "&" + query : "")
            );
         
        }
    }
*/
}

export default ApiService;
