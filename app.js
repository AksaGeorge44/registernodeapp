var express=require('express')

var cors = require('cors')

var bodyParser=require('body-parser')
var mongoose=require('mongoose')
const{studentModel}=require('./models/studentModel')
mongoose.connect("mongodb+srv://Aksageorge:aksageorge44@cluster0.3ictqpt.mongodb.net/?retryWrites=true&w=majority",{UseNewurlParser:true})
var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors({
    origin: 'http://192.168.0.120:3000' // You can replace '*' with the actual origin of your Flutter app
  }));
  


app.get('/',(req,res)=>{
    res.send("hello world")
})



app.post('/read', async (req, res) => {
    try {
      console.log('Received request with data:', req.body);
  
      var studentObject = new studentModel(req.body);
      await studentObject.save();
      
      console.log('Student saved:', studentObject);
  
      res.json(studentObject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  


app.post('/edit',async(req,res)=>{
    try{
        var result=await studentModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error)
    {
        res.json({"status":"error"})
    }
})


app.post('/delete',async(req,res)=>{
    try{
        var result=await studentModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error)
    {
        res.json({"status":"error"})
    }
})
app.get('/viewall',async(req,res)=>{
    try{
        var result=await studentModel.find()
        res.json(result)
    }
    catch(error)
    {
        res.json({"status":"error"})
    }
})


app.get('/add',(req,res)=>{
    var a=10;
    var b=10;
    var result=a+b;
    res.send("result:"+result);
})


app.get('/subtract',(req,res)=>{
    var a=20;
    var b=10;
    var result=a-b;
    res.send("result:"+result);
})

app.get('/division',(req,res)=>{
    var a=20;
    var b=2;
    var result=a/b;
    res.send("result"+result);
})



app.listen(process.env.PORT||3000,()=>{
console.log("server started at ")
})