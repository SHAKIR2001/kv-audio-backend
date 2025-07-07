import Product from "../models/product.js";

export function addPoduct(req,res){
    console.log(req.user);

    if (req.user == null ){
        res.status(401).json( {
            message : "please login and try again"
        })
        return //add this return stop create a product (stop the function running)
    }

    if (req.user.role != "admin")
    {
        res.status(403).json( {
            message : "You are not Authorized to perform this action"
        })
        return
    }
    
    const data = req.body;

    const newProduct = new Product(data);

    newProduct.save().then( ()=>{
        res.json({
            message : "Product added successfully"
        })
    }).catch( ()=>{
        res.json({
            error : "Product cannot be added"
        })
    })
};