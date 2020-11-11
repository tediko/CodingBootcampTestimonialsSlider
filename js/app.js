let references = [
    {
        name: 'Tanya Sinclair',
        title: 'UX Engineer',
        reference: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        image: 'assets/img/image-tanya.jpg'
    },
    {
        name: 'John Tarkpor',
        title: 'Junior Front-end Developer',
        reference: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        image: 'assets/img/image-john.jpg'
    }
]

const buttons = document.querySelectorAll('[data-btn]');
const reference = document.querySelector('[data-ref]');
const name = document.querySelector('[data-name]');
const title = document.querySelector('[data-title]');
const image = document.querySelector('[data-image]');
let count = 0;

const displaySlide = (idx) => {
    name.textContent = references[idx].name;
    title.textContent = references[idx].title;
    reference.textContent = references[idx].reference;
    image.src = references[idx].image;
}

const slider = (element) => {
    const target = element.target.dataset.btn;
    const sliderLength = references.length - 1;
    target == 'next' ? count++ : count--;
    count > sliderLength ? count = 0 :
    count < 0 ? count = sliderLength : false;
    displaySlide(count);
}

buttons.forEach(element => {
    element.addEventListener('click', slider);
})