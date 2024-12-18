class WorkoutView {
    constructor() {
        this.totalWorkoutsEl = document.getElementById('total-workouts');
        this.workoutsContainer = document.getElementById('workouts-container');
        this.sportFilterEl = document.getElementById('sport-filter');
        this.dateFilterEl = document.getElementById('date-filter');
    }

    renderWorkouts(workouts, translations) {
        this.workoutsContainer.innerHTML = workouts.map((workout, index) => `
            <div class="workout-card">
                <div>
                    <p>Спорт: ${translations.sport[workout.sport]}</p>
                    <p>Длительность: ${workout.duration} мин</p>
                    <p>Интенсивность: ${translations.intensity[workout.intensity]}</p>
                    <p>Дата: ${workout.date}</p>
                </div>
                <button class="delete-btn" data-index="${index}">Удалить</button>
            </div>
        `).join('');
    }

    updateTotalWorkouts(total) {
        this.totalWorkoutsEl.textContent = total;
    }

    getFilters() {
        return {
            sport: this.sportFilterEl.value,
            date: this.dateFilterEl.value,
        };
    }
}

export default WorkoutView;
