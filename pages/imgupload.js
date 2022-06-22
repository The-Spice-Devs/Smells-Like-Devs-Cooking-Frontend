import React, { useState } from "react";
const App = () => {
  const cloudinaryURL = process.env.NEXT_PUBLIC_RESOURCE_CLOUD_URL;

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "recipe_images");
    data.append("cloud_name", "dkgm8e6lz");
    fetch(cloudinaryURL, {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img alt="somealt" src={url} />
      </div>
    </div>
  );
};

export default App;
