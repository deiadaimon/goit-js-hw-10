import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    const delay = Number(form.delay.value);
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
        if (form.state.value === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay);
        } else if (form.state.value === 'rejected') {
            setTimeout(() => {
                reject(delay);
            }, delay);
        }
    });
    promise
        .then(delay => {
            iziToast.success({
                title: 'OK!',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error!',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
        });
    event.currentTarget.reset();
});