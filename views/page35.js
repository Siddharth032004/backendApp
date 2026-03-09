const app=express();
const productRouter=express.Router();
const userRouter=express.Router();
productRouter.get("/list",(req,res)=>{
    res.send("productlist");
})
userRouter.get("/list",(req,res)=>{
    res.send("userlist");
})
app.use("/products",productRouter)
app.use("/users",userRouter)
app.listen(5000,()=> console.log("server started"));
