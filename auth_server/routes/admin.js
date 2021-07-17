var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload= require('./multer')

router.post('/checkadminlogin',function(req,res,next){
  console.log("hello");
  console.log(req.body)
  var adminId =  req.body.adminId;
  var adminPassword = req.body.adminPassword;
  
    pool.query('select * from admin where adminId=? and adminPassword=?',[req.body.adminId,req.body.adminPassword],function(err,row,result){
      if(err){
        console.log(err);
      }
      if(row.length>0)
      {
        console.log('sucessfull');
        var result1 = res.status(200).json({RESULT:result});
        console.log(result1);
        console.log("next stage...............");
            }
    else {    
      console.log('unsucessfull');
      return res.status(500).json({RESULT:false})
    }
    });
  });

  router.post('/checksignup',function(req,res,next){
    console.log(req.body)
    //console.log(req.file)
    pool.query('insert into userregister(userName,userAge, userGender,userEmail,userPhoneNo,userAddress,UserPassword)values(?,?,?,?,?,?,?)',[req.body.userName,req.body.userAge,req.body.userGender,req.body.userEmail,req.body.userPhoneNo,req.body.userAddress,req.body.password],function(error,result){
      if(error)
      { console.log(error)
        return res.status(500).json({RESULT:false}) }
      else
      { return res.status(200).json({RESULT:result})
       console.log('successfully completed')
    }
    }) 
    });

    
router.get('/displayallcategory',function(req, res, next) {
  pool.query('select * from admin',function(error,result){
 
  if(error){console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});
  

module.exports = router;
  
/* if(result.length==0)
          {
            console.log('unsucessfull');

        return res.status(500).json({RESULT:false})
                }
        else {    
          console.log('sucessfull');
        return res.status(200).json({RESULT:result})
       



      if(row.length>0)
      {
        console.log('unsucessfull');

     res.json({'success':true , 'message':row[0].adminId});
            }
    else {    
      console.log('sucessfull');
      res.json({'success':false , 'message':'user not found,please try again'});
  }
  */