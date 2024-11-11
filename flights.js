const temp = 20; //istället för api-temperatur - test
const buttonhello = document.getElementById('flightbtn'); //Hämtar knappen

//Test att om tempen är äver 15 grader så syns inte knappen. 
if (temp >= 15) {
    buttonhello.style.display= "none";
           
}
else {
    buttonhello.style.display= ""; // om den är under så syns knappen
}



function changetext(){
    buttonhello.innerText= "Hello world";
     
    

}

buttonhello.addEventListener('click', changetext)