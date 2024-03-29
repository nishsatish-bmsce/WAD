const mongoose=require("mongoose")

const hotel_schema= new mongoose.Schema({
  hotel_name: {
      type:String,
      required:true
  },
  hotel_adress: {
      type:String,
      required:true
  },
  rooms: [{type:mongoose.Schema.Types.ObjectId,ref:'Room'}],
  payment: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'payment'
  },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});


const Hotel = mongoose.model("Hotel",hotel_schema);
module.exports = Hotel;