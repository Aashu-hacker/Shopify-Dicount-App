import express from 'express'
const router = express.Router()
import {con} from "../index.js"

router.post('/createCampaign',async(req,res)=>{
    con.connect(function(err) {
        if (err) {
            console.log("ERROR",err)
        }
        var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        
      });
})





export default router 