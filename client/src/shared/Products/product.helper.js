//import { BACKEND_URL } from "../../site.config";
import { ImageUrl } from "../../apis/request";
import Image from './NoProduct.jpg';
export function fetchSingleFileSrc(item) {
    let imgSrc = '';
    var http = new XMLHttpRequest();
    if (item && item.productImages && item.productImages.length > 0) {
        imgSrc = ImageUrl + item.productImages[0]

        // http.open('HEAD', imgSrc, false);
        // http.send();
        // if (http.status === 200) {
        //     imgSrc = BACKEND_URL + item.productImages[0]
        // } else {
        //     imgSrc = Image;
        // }
    }
    else {
        imgSrc = Image;
    }
    return imgSrc;
}
export function fetchImagesSrcExceptFirstIndex(item) {
    let tempArr = [];
    if (item && item.productImages && item.productImages.length > 0) {
        tempArr = item.productImages.slice(1).map(src => ImageUrl + src)
    }
    return tempArr;
}
