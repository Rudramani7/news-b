import News from './model/news.js';
import {data}  from './constants/data.js';

const DefaultData = async () => {
    try {
        await News.deleteMany({});
        await News.insertMany(data);
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;