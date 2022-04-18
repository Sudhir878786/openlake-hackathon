const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true, unique: true },
  courseCode: { type: String, required: true, unique: true },
  instructorName: { type: String },
  photo: { type: String },
  credits:{type:Number},
  topicsIncluded: { type: Array },
});
const blogsSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseName: { type: String },
  credits: { type: String },
  photo: { type: String },
  instructorName: { type: String },
  about: { type: Number },
  review: [
    {
      bloggerName: { type: String },
      blog: { type: String },
      photo: { type: String },
      bloggerBatch: { type: String },
    },
  ],
  forum: [
    {
      bloggerName: { type: String },
      blog: { type: String },
      photo: { type: String },
      date: { type: Date },
    },
  ],
});
const lostSchema = new mongoose.Schema({
  itemName: { type: String },
  date: { type: Date },
  isReceived: { type: Boolean },
  founderName: { type: String },
  receiverName: { type: String },
  photo: { type: String },
});
const commonRoomSchema = new mongoose.Schema({
  personName: { type: String },
  date: { type: Date },
  message: { type: String },
  photo:{type:String}
});
const alumniInteractionSchema = new mongoose.Schema({
  alumniName: { type: String },
  date: { type: Date },
  message: { type: String },
  photo: { type: String },
});

// listSchema.pre('save', async function (next){

// })


const Courses = new mongoose.model("Courses", courseSchema);
const Blogs = new mongoose.model("Blogs", blogsSchema);
const Lost = new mongoose.model("Lost", lostSchema);
const CommonRoom = new mongoose.model("CommonRoom", commonRoomSchema);
const AlumniInteraction = new mongoose.model("AlumniInteraction", alumniInteractionSchema);
module.exports = { Courses: Courses,  Blogs: Blogs ,Lost:Lost, CommonRoom:CommonRoom,AlumniInteraction:AlumniInteraction};
