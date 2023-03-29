import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";

let URLPresensi = "https://ws-ulbi.herokuapp.com/presensi";

get(URLPresensi, isiTablePresensi);

function isiTablePresensi(results) {
    console.log(results);
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = isiTabel.replace("#NAMA#", value.Biodata.Nama).replace("#NOHP#", value.Phone_number).replace("#JABATAN#", value.Datetime).replace("#LOKASI#", value.Location).replace("#STATUS#", value.Checkin).replace("#HARIKERJA#", value.Datetime).replace("#JAMKERJA#", value.Datetime).replace("#WARNA#", getRandomColor()).replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("presensi", content);
}