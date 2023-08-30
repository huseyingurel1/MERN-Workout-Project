const express = require('express');
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const router = express.Router();


// GET all workouts
router.get('/', getWorkouts )

// GET single workout
router.get('/:id', getWorkout)


//POST a new workouts
router.post('/', createWorkout)


//DELETE workouts
router.delete('/:id',deleteWorkout)


//UPDATE a workouts
router.patch('/:id',updateWorkout)

module.exports = router