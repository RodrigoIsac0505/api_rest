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
      pool.query($query,workoutId, function (e, rows) {
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
      // Set the query message
      $query = "INSERT INTO `usuario` (`id`, `email`, `password`, `name`, `last_name`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,?)"
      console.log("comienzo de workouts");
      // Execute the database query
      pool.query($query,newWorkout.id,newWorkout.email,newWorkout.password,newWorkout.name,newWorkout.last_name,newWorkout.createdAt,newWorkout.updateAt
        ,function (e, rows) {
          if (e) {
            // Show the error message
            console.log("Error ocurred in executing the query.")
            return
          } 
          console.log("se agrego");
          resolve(rows)
        })
    }, 1500)
  })
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};