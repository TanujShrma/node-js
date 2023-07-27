const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect(); // Called dbConnect() here------- // insertOne() for single insertion
    const result = await db.insertMany([  // insertMany() for multiple insertions 
        { name: 'test1,', email: 'test1@gmail.com', city: 'test1' },
        { name: 'test2,', email: 'test2@gmail.com', city: 'test2' },
        { name: 'test3,', email: 'tes3t@gmail.com', city: 'test3' }
    ])
    if (result.acknowledged) {
        console.log('Data inserted successfully');
    };
}

insert();