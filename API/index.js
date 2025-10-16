//Declaracion de modulos requeridos

var Express = require("express")

var bodyParser = require("body-parser")

var cors = require("cors")

var mysql = require("mysql2")



//Conexion a la Base de Datos - Datasource

var conexion = mysql.createConnection({

    host:"localhost",

    port:"3306",

    user:"root",

    password:"MysqlRoot47!",

    database:"marina_mercante",

    authPlugins: {

        mysql_native_password: () => () => Buffer.from('MysqlRoot47!')

      }

});



//Inicio del uso de Express.js

var app = Express();

//Declaracion usos y libs

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));



//Definicion del Listener

app.listen(49146,()=>{

    conexion.connect(function(err){

        if (err) throw err;

        console.log("Connexion a la BD con exito!")

    })

});
