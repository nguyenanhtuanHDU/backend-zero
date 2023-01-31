const { time } = require("console");
const path = require("path");

const uploadSingleFile = async (file) => {
  try {
    const timeStamp = new Date().getTime();

    let extName = path.extname(file.name); // lấy ra đuôi file
    let baseName = path.basename(file.name, extName); // lấy ra tên file

    let uploadPath =
      path.join("./src", "/public/images/upload/") + `${baseName}-${timeStamp}${extName}`
    await file.mv(uploadPath);
    return {
      status: "success",
      path: file.name,
      error: null,
    };
  } catch (error) {
    return {
      status: "error",
      path: null,
      error: error,
    };
  }
};

const uploadMultipleFile = async (files) => {
  try {
    await files.map((file) => {
      const timeStamp = new Date().getTime();

      let uploadPath =
        path.join("./src", "/public/images/upload/") +
        `${timeStamp}-${file.name}`;
      file.mv(uploadPath);
    });
    return {
      status: "success",
      path: null,
      error: null,
    };
  } catch (error) {
    return {
      status: "error",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

module.exports = { uploadSingleFile, uploadMultipleFile };
