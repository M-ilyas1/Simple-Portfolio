// let calcScrollValue = () => {
//     let scrollProgress = document.getElementById("progress")
//     let progressValue = document.getElementById("progress-value")

//     let pos = document.documentElement.scrollTop;
//     let calcHeight = 
//               document.documentElement.scrollHeight - 
//               document.documentElement.clientHeight;
//     let scrollHeight = math.round((pos * 132) / calcHeight);
    
//     if(pos > 132){
//       scrollProgress.style.display = "grid";
//     }else {
//       scrollProgress.style.display = "none"
//     }
//     scrollProgress.addEventListener("click", () => {
//       document.documentElement.scrollTop = 0;
//     });
//     scrollProgress.style.background = `canic-gradient
//     (#03cc65 ${scrollValue}%, #d7d7d7d ${scrollValue}%) `

//   }
//   window.onscroll = calcScrollValue;
//   window.onload = calcScrollValue;