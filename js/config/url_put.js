const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlPUT = "https://ws-ulbi.herokuapp.com/upd/" + presensiId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}
