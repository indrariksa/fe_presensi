import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

var MyVar = {};

export function isiTablePresensi(results) {
    MyVar.length = results.length;
    results.forEach(isiRow);
}

function isiRow(value) {
    if (value.biodata.jam_kerja) {
        var Durasi = value.biodata.jam_kerja[0].durasi;
        var jamMasuk = value.biodata.jam_kerja[0].jam_masuk;
        var jamKeluar = value.biodata.jam_kerja[0].jam_keluar;
    }
    else {
        Durasi = ["Error"];
        jamMasuk = ["Error"];
        jamKeluar = ["Error"];
    }

    document.getElementById("jml").textContent = MyVar.length + " Data";

    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#JAMKERJA#", Durasi)
            .replace("#JAMMASUK#", jamMasuk)
            .replace("#JAMKELUAR#", jamKeluar)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}