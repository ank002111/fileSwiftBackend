import express from "express";
import { uploadFile,getAllFiles,deleteFile, downloadFile } from "../controller/image-controller.js";
import upload from "../utilis/upload.js";
const router = express.Router();

router
  .post("/upload", upload.single("file"), uploadFile)
  .get('/files',getAllFiles)
  .get("/ank117/:fileId", downloadFile)
  .delete('/file/:fileId',deleteFile);
export default router;
