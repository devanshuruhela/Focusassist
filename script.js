//all input container related
const inputcontainer = document.getElementById('input-container');
const countdownform = document.getElementById('countdownform');
const dateElt = document.getElementById('date-picker');

//all countdown related 
const countdownid = document.getElementById('countdown');
const countdowntitleid = document.getElementById('countdown-title');
const countdownbtn = document.getElementById('button-container');
const timeelt = document.querySelectorAll('span')

//all complete related
const completeElt = document.getElementById('complete');
const completeinfoElt = document.getElementById('complete-info');
const completebtn = document.getElementById('complete-button');

// our variables
let countdowntitle = '';
let countdowndate = '';
let countdownvalue = Date;
let countdownactive;

// standard conversion
const second = 1000;
const minute = second * 60;
const hour = minute  *60;
const day = hour * 24;
// setting min parameter dynamically with todays date
const today = new Date().toISOString().split('T')[0];
//console.log(today);
dateElt.setAttribute('min' , today);


// to update and populate the countdown and complete containers
function updateDom()
{
  countdownactive = setInterval(()=>
  {
      const now = new Date().getTime();
      const gap = countdownvalue - now;

      inputcontainer.hidden = true;
      if(gap < 0)
      {
        countdownid.hidden = true;
        clearInterval(countdownactive);
        completeinfoElt.textContent = `${countdowntitle} finished on ${countdowndate}`
        completeElt.hidden = false;
      }
      else{
          countdowntitleid.textContent = `${countdowntitle}`;
          timeelt[0].textContent = `${days}`;
          timeelt[1].textContent = `${hours}`;
          timeelt[2].textContent = `${minutes}`;
          timeelt[3].textContent = `${seconds}`;
          completeElt.hidden = true;
          countdownid.hidden = false;
      }
  } , second)
}


function updatecountdown(e)
{
  e.preventDefault();
  //console.log(e);
  countdowntitle = e.srcElement[0].value;
  countdowndate = e.srcElement[1].value;

  if(countdowndate === '')
  {
    alert('Please choose your date');
  }
  else{
      countdownvalue = new Date(countdowndate).getTime();

      updateDom();
  }
}

function newcountdownset()
{
  completeElt.hidden = true;
  countdownid.hidden = true;
  inputcontainer.hidden = false;
  
  clearInterval(countdownactive);
  countdowntitle = '';
  countdowndate = '';
}

countdownform.addEventListener('submit' , updatecountdown);
countdownbtn.addEventListener('click' , newcountdownset);

completebtn.addEventListener('click' , newcountdownset)