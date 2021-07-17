var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')
var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')

router.post('/addnewrecord',upload.single(''),function(req, res, next) {
   console.log(req.body)
   pool.query('insert into addcategory(categoryName) values(?)',[req.body.categoryName],function(error,result){
   
       if(error){
           console.log(error)
           return res.status(500).json({RESULT:false})
       }
       else{ 
           return res.status(200).json({RESULT:true})
       }
       })
});



router.get('/displayallcategory',function(req, res, next) {
    pool.query('select * from addcategory',function(error,result){
   
    if(error){console.log(error)
        return res.status(500).json([])
    }
    else{ 
        return res.status(200).json(result)
    }
    })
});

router.post('/editData',function(req,res,next){
    console.log(req.body)
    console.log(req.file)
    pool.query('update addcategory set categoryName=?where categoryId=?',[req.body.categoryName,req.body.categoryId],function(error,result){
        if(error)
        {   console.log(error)
            return res.status(500).json({RESULT:false})
        }
        else{
            console.log(result)
            return res.status(200).json({RESULT:true})
        }
    })
});

router.post('/deleteRecord',function(req, res, next) {
    pool.query('delete from addcategory where categoryId=?',[req.body.categoryId],function(error,result){
       
      if(error)
     {
        return res.status(500).json({RESULT:false})}
  
     else
     {
      return res.status(200).json({RESULT:true})
     }
  
    })  
    }); 


    
module.exports = router;