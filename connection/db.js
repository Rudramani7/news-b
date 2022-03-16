import mongoose from 'mongoose';

const Connection = async () =>{
    try {
        const URL = `mongodb://news:news123@cluster0-shard-00-00.r3vr7.mongodb.net:27017,cluster0-shard-00-01.r3vr7.mongodb.net:27017,cluster0-shard-00-02.r3vr7.mongodb.net:27017/news?ssl=true&replicaSet=atlas-10y64t-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log("DB connected!");
    } catch (error) {
        console.log('NOT',error)
    }
}



export default Connection;