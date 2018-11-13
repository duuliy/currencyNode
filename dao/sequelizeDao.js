
// const dbpool = require("../config/dbconfig");

//对比传统sql语句
// const sequelizeDao = {
//     find(params){
//         return new Promise(function(resolve,reject){
//           dbpool.connect("update image set img =? where name=?",
//             params,(err,data)=>{
//               console.log("userDAO查询完毕");
//               console.log(data);
//               if(!err){
//                 resolve(data)
//               }else{
//                 reject(err)
//               }
//             })
//         })
//       },
// }

// module.exports=sequelizeDao
const Sequelize = require('sequelize');
const sequelize = require("../config/dbconfig");

const sequelizeDao = sequelize.define('users', {  //带表名
  id: {
    type: Sequelize.INTEGER, //类型
    primaryKey: true,     //主键
    autoIncrement: true,   //自增长
    allowNull: false      //是都允许为空
    // defaultValue:DataTypes.UUIDV1
  },
  year: {
    type: Sequelize.DATE ,
    allowNull: false  
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false           
  },
  sex: {
    type: Sequelize.INTEGER ,
    allowNull: false        
  },
  position: {
    type: Sequelize.STRING(10),
    allowNull: false            
  },
  Jurisdiction: {
    type: Sequelize.STRING(10),
    allowNull: false           
  },
  Blacklist: {
    type: Sequelize.STRING(1),
    allowNull: false           
  },
}, {
    freezeTableName: true ,    //禁用修改表名
    timestamps: false,
    tableName:'users'

  });


module.exports = sequelizeDao