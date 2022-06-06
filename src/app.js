import { Dropzone } from "dropzone";
import 'dropzone/src/dropzone.scss'
// Dropzone.autoDiscover = false;

const dropzone = new Dropzone(".dropzone", { url: "/file/post" });