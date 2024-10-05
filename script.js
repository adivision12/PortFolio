let typed =new Typed(".text",{
    strings:['MERN Stack Developer','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
let typed2 =new Typed(".para",{
    strings:['You Can Connect Me Through given link also'],
    typeSpeed:100,
    backSpeed:10,
    backDelay:1000,
    loop:true
})

let box=document.getElementById("box");

let btn=document.getElementById('btn');

    btn.addEventListener("click",()=>{
        console.log("Button was clicked")
        box.classList.toggle('hide')
    // if(box.classList.contains('hide')){
    //     box.classList.remove('hide')
    // }else{
    //     box.classList.add('hide')
    // }
        let icon=document.getElementById("icon");
        if(icon.classList.contains('fa-bars')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }else{
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    })

    let circularProgress1 =document.querySelector('.circular-progress1'),

    progressValue1 = document.querySelector('.progress-value1');
    let circularProgress2 =document.querySelector('.circular-progress2'),

    progressValue2 = document.querySelector('.progress-value2');
    let circularProgress3 =document.querySelector('.circular-progress3'),

    progressValue3 = document.querySelector('.progress-value3');
    let circularProgress4 =document.querySelector('.circular-progress4'),

    progressValue4 = document.querySelector('.progress-value4');



    let progressStartValue1= 0,
     progressStartValue2 = 0,
     progressStartValue3= 0,
     progressStartValue4= 0,

    EndValue1= 80,
    EndValue2= 70,
    EndValue3= 60,
    EndValue4= 50,

    speed = 15;



    let progress = setInterval(() =>{
        progressStartValue1++;
        progressValue1.textContent =`${progressStartValue1}%`;
        circularProgress1.style.background = `conic-gradient(aqua ${progressStartValue1 * 3.6}deg, black 0deg)`;                          
        //3.6deg * 100 = 360deg


        if(progressStartValue1 == EndValue1){

            clearInterval(progress);
        }
    },speed);

    let progress2 = setInterval(() =>{
        progressStartValue2++;
        progressValue2.textContent =`${progressStartValue2}%`;
        circularProgress2.style.background = `conic-gradient(aqua ${progressStartValue2 * 3.6}deg, black 0deg)`;                          
        //3.6deg * 100 = 360deg


        if(progressStartValue2 == EndValue2){

            clearInterval(progress2);
        }
    },speed);

    let progress3 = setInterval(() =>{
        progressStartValue3++;
        progressValue3.textContent =`${progressStartValue3}%`;
        circularProgress3.style.background = `conic-gradient(aqua ${progressStartValue3 * 3.6}deg, black 0deg)`;                          
        //3.6deg * 100 = 360deg


        if(progressStartValue3 == EndValue3){

            clearInterval(progress3);
        }
    },speed);

    let progress4 = setInterval(() =>{
        progressStartValue4++;
        progressValue4.textContent =`${progressStartValue4}%`;
        circularProgress4.style.background = `conic-gradient(aqua ${progressStartValue4 * 3.6}deg, black 0deg)`;                          
        //3.6deg * 100 = 360deg


        if(progressStartValue4 == EndValue4){

            clearInterval(progress4);
        }
    },speed);


    let navItems=document.querySelectorAll('.nav-content');

    navItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            console.log("btn clicked");
            box.classList.toggle('hide')

            icon.classList.remove('fa-xmark');

            icon.classList.add('fa-bars');
        })
    })

  function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "addt8175045@gmail.com",
        Password : "214192B02B772A18B82DDB2D26F819C1C055",
        To : 'adityasingh16072004@gmail.com',
        From : 'as81750454@gmail.com',
        Subject : "PortFolio Data",
        Body : `name=${document.getElementById('name').value} <br> email=${document.getElementById('email').value}  <br> message=${document.getElementById('msg').value}`
    }).then(
      message => {
        console.log(message)
        if(message=='OK'){
            swal("SuccessFul !", "Details Sent!", "success");
            
        }else{
            swal("Error!", "Can't sent details!", "error");
        }
      }
    );
  }
