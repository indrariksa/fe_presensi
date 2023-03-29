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
    let content = isiTabel.replace("#NAMA#", value.biodata.nama).replace("#NOHP#", value.biodata.phone_number).replace("#JABATAN#", value.datetime).replace("#LOKASI#", value.location).replace("#STATUS#", value.checkin).replace("#HARIKERJA#", value.biodata.hari_kerja).replace("#JAMKERJA#", value.durasi).replace("#WARNA#", getRandomColor()).replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("presensi", content);
}