const dbConnect = require('./mongodb')

const deleteData = async () => {
    const db = await dbConnect(); // Called dbConnect() here------- 
    const result = await db.deleteOne({ name: 'test2,' }) // deleteOne() for single deletion
    if (result.acknowledged && result.deletedCount !== 0) {                            // deleteMany() for multiple deletions
        console.log('Data deleted successfully');
        console.log(result);
    }
    else if (result.acknowledged && result.deletedCount === 0) {
        console.log('No matching data found');
    };
}

deleteData();