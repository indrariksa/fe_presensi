import { get } from "https://bukulapak.github.io/api/process.js";

let URLPresensi = "http://ws-ulbi.herokuapp.com/presensi";

get(URLPresensi, isiTablePresensi);

function isiTablePresensi(results) {
    console.log(results);
}