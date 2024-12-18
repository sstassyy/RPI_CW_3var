import WorkoutModel from './model.js';
import WorkoutView from './view.js';
import WorkoutPresenter from './presenter.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new WorkoutModel();
    const view = new WorkoutView();
    const presenter = new WorkoutPresenter(model, view);
});
