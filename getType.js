export default function (data) { // default 이기 때문에 따로 함수이름을 지정할 필요가 없음
    return Object.prototype.toString.call(data).slice(8, -1);
}