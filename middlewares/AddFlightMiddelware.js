module.exports= async function AddFlightMiddelware(req,res,next){
    const {airline, flightNo,departure,arrival,departureTime,arrivalTime,seats,price}=req.body

    try{
        if(!airline || !flightNo || !departure ||!arrival ||!departureTime || !arrivalTime || !seats ||!price) return res.send({msg:'Please give all the details'})
        next()

    }catch(err){
        console.log(err.message)
    }
}