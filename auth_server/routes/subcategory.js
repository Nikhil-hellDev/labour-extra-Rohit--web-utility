var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')

var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')

router.post('/addnewrecord',function(req, res, next) {
   console.log(req.body)
   pool.query('insert into addsubcategory(categoryId,subcategoryName) values(?,?)',[req.body.categoryId,req.body.subcategoryName],function(error,result){
   
       if(error){
           console.log(error)
           return res.status(500).json({RESULT:false})
       }
       else{ 
           return res.status(200).json({RESULT:true})
       }
       })
});



router.get('/displayallsubcategory',function(req, res, next) {
    pool.query('select * from addsubcategory',function(error,result){
   
    if(error){console.log(error)
        return res.status(500).json([])
    }
    else{ 
        return res.status(200).json(result)
    }
    })
});
router.post('/displayByCategoryId',function(req,res,next){
    pool.query('select * from addsubcategory where categoryId=?',[req.body.categoryId],function(error,result){
      if(error){
        console.log(error)
        return res.status(500).json([])
      }
      else{
        console.log(result)
        return res.status(200).json(result)
      }
    })
  })
module.exports = router;