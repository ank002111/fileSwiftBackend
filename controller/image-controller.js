import File from "../models/file.js";
import shortid from "shortid";


export const uploadFile = async (req, res) => {
  const shortLink = shortid();
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
    shortLink,
  };

  try {
    console.log(shortLink);

    console.log(fileObj);
    const file = await File.create(fileObj);
   
   
    res
      .status(200)
      .json({
        path: `https://file-swift-backend-nv1i.vercel.app/file/${file._id}`,
        shortLink: fileObj.shortLink,
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};


export const downloadFile = async (req, res) => {
  try {
    const shortLink = req.params.fileId;
    const file = await File.findOne({shortLink});
    console.log(file,"horay")
    file.downloadContent++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllFiles = async(req,res) => {
  try{
   const files = await File.find({});
   res.status(200).json(files);
  }catch(error){
    console.error(error.message);
    return res.status(500).json({ msg: error.message });
  }
}

export const deleteFile = async(req,res)=>{
  const id = req.params.fileId;
  try{
    const doc = await File.findByIdAndDelete(id);
    res.status(200).json(doc);
  }catch(error){
    console.error(error.message);
    return res.status(500).json({ msg: error.message });
  }
}