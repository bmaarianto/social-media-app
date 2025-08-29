import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publicKey: proccess.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: proccess.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: proccess.env.IMAGEKIT_URL_ENDPOINT,
});

export default imagekit;
