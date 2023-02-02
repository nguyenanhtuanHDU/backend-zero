const path = require("path");

const uploadSingleFile = async (file) => {
  try {
    const timeStamp = new Date().getTime();

    const extName = path.extname(file.name); // lấy ra đuôi file
    const baseName = path.basename(file.name, extName); // lấy ra tên file
    const finalName = `${baseName}-${timeStamp}${extName}`;

    const uploadPath = path.join("./src", "/public/images/upload/") + finalName;
    await file.mv(uploadPath);
    return {
      status: "success",
      path: finalName,
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

const uploadMultipleFiles = async (files) => {
  let filesInfoArr = [];
  let countSuccess = 0;
  try {
    await files.map((file) => {
      const timeStamp = new Date().getTime();
      const extName = path.extname(file.name);
      const baseName = path.basename(file.name, extName);
      const finalName = `${baseName}-${timeStamp}${extName}`;

      let uploadPath = path.join("./src", "/public/images/upload/") + finalName;
      file.mv(uploadPath);

      countSuccess++;
      filesInfoArr.push({
        status: "success",
        fileName: file.name,
        filePath: finalName,
        error: null,
      });
    });
    return {
      EC: 0,
      data: {
        countSuccess,
        detail: filesInfoArr,
      },
    };
  } catch (error) {
    return {
      status: "error",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

module.exports = { uploadSingleFile, uploadMultipleFiles };
