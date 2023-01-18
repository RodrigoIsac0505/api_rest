const DB = require("./db.json");
const pool = require('./connection');

const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Set the query message
      $query = "SELECT * from usuario"

      // Execute the database query
      pool.query($query, function (e, rows) {
        if (e) {
          // Show the error message
          console.log("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
};

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Set the query message
      $query = "SELECT * from usuario where id = ?"

      // Execute the database query
      pool.query($query, workoutId, function (e, rows) {
        if (e) {
          // Show the error message
          console.log("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
};

const createNewWorkout = (newWorkout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // agregar multiples filas se deja el signo de interrogacion sin parentesis
      //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
      // agregar una sola fila
      $query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES (?)"
      console.log("comienzo de workouts");
      let datos = [
        newWorkout.id,
        newWorkout.email,
        newWorkout.password,
        newWorkout.name,
        newWorkout.last_name,
        newWorkout.createdAt,
        newWorkout.updatedAt
      ];
      console.log(datos);
      pool.query($query, [datos]
        , function (e, result, fields) {
          if (e) {
            // Show the error message
            console.log("Error ocurred in executing the query.")
            return
          }
          console.log("se agrego");
          resolve("Filas afectadas: " + result.affectedRows);
        })
    }, 1500)
  })
};


const updateOneWorkout = (workoutId, changes) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // agregar multiples filas se deja el signo de interrogacion sin parentesis
      //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
      // agregar una sola fila
      console.log("ultimos: " + changes);
      //$query = " UPDATE usuario SET email=" + changes.email + ",password=" + changes.password + " , name= " + changes.name + ",last_name= " + changes.last_name + ", updatedAt= " + changes.updatedAt + " WHERE id=?"
      $query = " UPDATE usuario SET email='dsd',password='dsdsd' , name='sdsdsd',last_name= 'sdsdsd', updatedAt='sdsds' WHERE id=?"
      console.log("comienzo de workouts");
      pool.query($query, workoutId
        , function (e, result, fields) {
          if (e) {
            // Show the error message
            console.log("Error ocurred in executing the query.")
            return
          }
          console.log("se actualizo");
          console.log("Filas afectadas: " + result.affectedRows);
          resolve("Filas afectadas: " + result.affectedRows);
        })
    }, 1500)
  })
};

const deleteOneWorkout = (workoutId) => {
  setTimeout(() => {
  $query = "Delete from usuario where id=?";
  console.log("comienzo de workouts");
  pool.query($query, workoutId
    , function (e, result, fields) {
      if (e) {
        // Show the error message
        console.log("Error ocurred in executing the query.")
        return
      }
      console.log("se elimino");
    })
  }, 1500)
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};