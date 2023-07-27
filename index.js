const dbConnect = require('./mongodb')

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {  Old way --------
//         console.log(data);
//     })
// })

// async function main() {
//     let data = await dbConnect();
//     data = await data.find().toArray(); // Same as below -------  
//     console.log(data);
// }

const main = async () => {
    let data = await dbConnect(); // Called dbConnect() here-------
    data = await data.find().toArray();  // Modern way-----
    console.log(data);
}

main();
