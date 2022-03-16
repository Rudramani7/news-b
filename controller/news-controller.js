
import News from '../model/news.js'

export const getNews = async (req,res) =>{
try {
    const size = Number(req.query.size);
    const skip = Number(req.query.page);


    let data = await News.find().limit(size).skip(size* skip);
    // console.log(data);


    res.status(200).json(data);
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
}