const dbConnect = require('./mongodb')

const update = async () => {
    const db = await dbConnect(); // Called dbConnect() here------- // updateOne() for single updation
    const result = await db.updateOne(  // updateMany/update() for multiple updations 
        { name: 'test,' }, {
        $set: { name: 'test01,', email: 'test01@gmail.com', city: 'test01' },
    }
    )
    if (result.acknowledged) {
        console.log('Data updated successfully');
    };
}

update();