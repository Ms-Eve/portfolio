const sections =document.querySelectorAll('.section');
const sectBtns =document.querySelectorAll('.controls');
const sectBtn =document.querySelectorAll('.control');
const allSections =document.querySelector('.main-content')[0];

// function PageTransitions (){
//     //Button click active class
//     for (let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', function() {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn';
//         })
//     }
// }
//     PageTransitions();

    (function () {
        [...document.querySelectorAll(".control")].forEach(button => {
            button.addEventListener("click", function() {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            })
        });
        document.querySelector(".theme-btn").addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        })
    })();
// Sections Active Class                                        
allSections.addEventListener('click', (e) => {
   const id = e.target.dataset.id;
   if(id){
    sectBtns.forEach((btn) =>{
        btn.classList.remove('active')
    })
    e.target.classList.add('active')
    //hide
    sections.forEach((section) =>{
        section.classList.remove('active')
    })
    const element = document.getElementById(id);
    element.classList.add('active');
   }
})
// Toggle theme
const themeBtn =document.querySelector('.theme-btn');
themeBtn.addEventListener('click',() => {
    let element = document.body;
    element.classList.toggle('light-mode')

})


//  emailjs.init('F55z98qKXVNv5QcBt');
//  emailjs.sendForm('template_ufqu2tj', 'My Default Template', this)

//Email JS
// function Validate() {
//     let name = document.querySelector('.name')
//     let email = document.querySelector('.email')
//     let subject = document.querySelector('.subject')
//     let message = document.querySelector('.message')
//     let sendBtn = document.querySelector('.send-btn')
    
//     sendBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if(name.value == "" || email.value == "" || subject.value == "" || message.value ==""){
//             emptyerror();
//         }else{
//             sendmail(name.value, email.value, subject.value, message.value);
//             success();
//         }
//     });
// }

// Validate();

// function sendmail(name,email, subject, message){
//     emailjs.sendForm('template_ufqu2tj', 'My Default Template',{
//         from_name:email,
//         to_name:name,
//         message: message,
//         subject:subject,
//     });
// }

// function emptyerror (){
//     swal({
//         title: "Oh No ....",
//         text: "Fields cannot be empty!",
//         icon: "error",
        
//       });
// }

// function success (){
//     swal({
//         title: "Email sent successfully",
//         text: "We try to reply in 24 hours",
//         icon: "success",
        
//       });
// }