class WorkoutModel {
    constructor() {
        this.workouts = [];
    }

    addWorkout(workout) {
        this.workouts.push(workout);
    }

    deleteWorkout(index) {
        this.workouts.splice(index, 1);
    }

    getWorkouts(filter = {}) {
        return this.workouts.filter(workout => {
            if (filter.sport && workout.sport !== filter.sport) return false;
            if (filter.date && workout.date !== filter.date) return false;
            return true;
        });
    }

    getTotalWorkouts() {
        return this.workouts.length;
    }
}

export default WorkoutModel;
