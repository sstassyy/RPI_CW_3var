const translations = {
    intensity: {
        low: 'Низкая',
        medium: 'Средняя',
        high: 'Высокая',
    },
    sport: {
        running: 'Бег',
        cycling: 'Велосипед',
        swimming: 'Плавание',
        gym: 'Тренажерный зал',
    },
};

class WorkoutPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.init();
    }

    init() {
        document.getElementById('workout-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.addWorkout();
        });

        this.view.sportFilterEl.addEventListener('change', () => this.applyFilters());
        this.view.dateFilterEl.addEventListener('change', () => this.applyFilters());

        this.view.workoutsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-btn')) {
                const index = event.target.dataset.index;
                this.deleteWorkout(index);
            }
        });

        this.render();
    }

    addWorkout() {
        const sport = document.getElementById('sport').value;
        const duration = document.getElementById('duration').value;
        const intensity = document.getElementById('intensity').value;
        const date = document.getElementById('date').value;

        if (!sport || !duration || !intensity || !date) {
            alert('Заполните все поля!');
            return;
        }

        const workout = { sport, duration: Number(duration), intensity, date };
        this.model.addWorkout(workout);
        this.render();
    }

    deleteWorkout(index) {
        this.model.deleteWorkout(index);
        this.render();
    }

    applyFilters() {
        const filters = this.view.getFilters();
        const filteredWorkouts = this.model.getWorkouts(filters);
        this.view.renderWorkouts(filteredWorkouts, translations);
    }

    render() {
        this.view.updateTotalWorkouts(this.model.getTotalWorkouts());
        this.applyFilters();
    }
}

export default WorkoutPresenter;
