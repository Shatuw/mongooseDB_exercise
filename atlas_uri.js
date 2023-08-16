import dotenv from "dotenv";
dotenv.config()

const uri = `mongodb+srv://admin:${process.env.atlas_pw}@ricscluster.0otykrf.mongodb.net/test?retryWrites=true&w=majority`;

export default uri;