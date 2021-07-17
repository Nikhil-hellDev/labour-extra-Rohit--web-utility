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


router.post('/addnewlabour',upload.single('labourPhoto'),function(req, res, next) {
    console.log(req.body)
    pool.query('insert into labourregister(labourName,labourdob,labourAge,labourGender,labourPhoneNo,labourAnotherPhone,labourAdhar,labourAddress,labourCity,labourCountry,labourPincode,labourPhoto,labourWorkExperience) values(?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.labourName,req.body.labourdob,req.body.labourAge,req.body.labourGender,req.body.labourPhoneNo,req.body.labourAnotherPhone,req.body.labourAdhar,req.body.labourAddress,req.body.labourCity,req.body.labourCountry,req.body.labourPincode,req.file.filename,req.body.labourWorkExperience],function(error,result){
    
        if(error){
            console.log(error)
            return res.status(500).json({RESULT:false})
        }
        else{ 
            return res.status(200).json({RESULT:true})
        }
        })
 });


 router.post('/addproffesion',upload.single('labourPhoto'),function(req, res, next) {
    console.log(req.body)
    pool.query('insert into labour_subcategory(categoryId,subcategoryId,labourId) values(?,?,?)',[req.body.categoryId,req.body.subcategoryId,req.body.labourId],function(error,result){
    
        if(error){
            console.log(error)
            return res.status(500).json({RESULT:false})
        }
        else{ 
            return res.status(200).json({RESULT:true})
        }
        })
 });



 router.get('/displaylabour',function(req, res, next) {
    pool.query('select * from  labourregister',function(error,result){
   
    if(error){console.log(error)
        return res.status(500).json([])
    }
    else{ 
        return res.status(200).json(result)
    }
    })
});

router.get('/displaylaboursub',function(req, res, next) {
    pool.query('select * from  labour_subcategory',function(error,result){
   
    if(error){console.log(error)
        return res.status(500).json([])
    }
    else{ 
        return res.status(200).json(result)
    }
    })
});


router.post('/deleteRecord',function(req, res, next) {
    pool.query('delete from labourregister where labourId=?',[req.body.labourId],function(error,result){
       
      if(error)
     {
        return res.status(500).json({RESULT:false})}
  
     else
     {
      return res.status(200).json({RESULT:true})
     }
  
    })  
    }); 

    
router.post('/deleteRecordsub',function(req, res, next) {
    pool.query('delete from labour_subcategory where labourId=?',[req.body.labourId],function(error,result){
       
      if(error)
     {
        return res.status(500).json({RESULT:false})}
  
     else
     {
      return res.status(200).json({RESULT:true})
     }
  
    })  
    }); 



    router.post('/editData',function(req,res,next){
        console.log(req.body)
        console.log(req.file)
        pool.query('update labourregister set labourName=?,labourdob=?,labourAge=?,labourGender=?,labourPhoneNo=?,labourAnotherPhone=?,labourAdhar=?,labourAddress=?,labourCity=?,labourCountry=?,labourPincode=?,labourWorkExperience=? where labourId=?',[req.body.labourName,req.body.labourdob,req.body.labourAge,req.body.labourGender,req.body.labourPhoneNo,req.body.labourAnotherPhone,req.body.labourAdhar,req.body.labourAddress,req.body.labourCity,req.body.labourCountry,req.body.labourPincode,req.body.labourWorkExperience,req.body.labourId],function(error,result){
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


    router.post('/editDatapswd',function(req,res,next){
        console.log(req.body)
        console.log(req.file)
        pool.query('update labourregister set labourPassword=? where labourId=?',[req.body.labourPassword,req.body.labourId],function(error,result){
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

    router.get('/displaylabourfeedback',function(req, res, next) {
        pool.query('select * from  labourfeedback',function(error,result){
       
        if(error){console.log(error)
            return res.status(500).json([])
        }
        else{ 
            return res.status(200).json(result)
        }
        })
    });
    
module.exports = router;