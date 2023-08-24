// import { deleteData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
// import { urlPOST, AmbilResponse} from "../config/url_delete.js";


// function deleteDatax(){
//     deleteData("https://ws-ulbi.herokuapp.com/delete/64661436d027a62af826a481" , AmbilResponse);
// }

// onClick("del_button", deleteDatax);
// var presensiId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');

function deleteData(IDHAPUS) {
    if (confirm("Apakah anda yakin ingin menghapus data ini?") == true) {
    var presensiId = IDHAPUS;
    var target_url = "https://ws-ulbi.herokuapp.com/delete/" + presensiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
    }else{
        alert("Data tidak jadi dihapus");  
    }
}