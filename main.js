const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const faqs = document.querySelectorAll('.faqs')



faqs.forEach(faq => {
    faq.addEventListener('click', e =>{
        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.remove('answer-show');
            questions[i].classList.remove('question-show');
            arrows[i].classList.remove('arrow-show');
        }
        for(let i = 0; i < answers.length;i++){
            if(faq.classList[1] === answers[i].classList[1]){
                answers[i].classList.toggle('answer-show')
                console.log('hello')
                questions[i].classList.toggle('question-show')
                arrows[i].classList.toggle('arrow-show')
            }
        }

    })
})