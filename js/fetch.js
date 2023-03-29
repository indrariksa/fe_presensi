import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/data.js";
import { urlAPI } from "./config/url.js";

get(urlAPI, isiTablePresensi);