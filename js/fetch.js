import { get } from "https://bukulapak.github.io/api/process.js";

let URLPresensi = "https://ws-ulbi.herokuapp.com/presensi";

get(URLPresensi, isiTablePresensi);

function isiTablePresensi(results) {
    console.log(results);
    results.forEach(isiRow);
}

function isiRow(value) {
    console.log(value)
}