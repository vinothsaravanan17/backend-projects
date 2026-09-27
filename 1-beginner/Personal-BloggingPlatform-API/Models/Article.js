const mongoose = require('mongoose');

const articleShema = new mongoose.Schema({
   title:{
      type: String,
      required:[200, ''],
      trim:true,
      maxlength:[200, 'Title cannot exceed 200 characters']
   },

   content:{
    type:String,
    required:[true, 'content is required']
   },

   



})



