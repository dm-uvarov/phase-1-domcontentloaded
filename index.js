// Your code goes here
//1
//  window.addEventListener('load', function(e) {
//    // const p = document.getElementById(`text`);
//   //   p.innerText = 'This is really cool!';
//     console.log("The DOM has loaded");
//     /*if (document.readyState !== 'loading' ){*/
//         afterLoadedDom();
//     /*}*/

    
//   });
//2
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("text").textContent = "This is really cool!"
});

//3
// document.addEventListener('readystatechange', ()=> afterLoadedDom());


// function afterLoadedDom(){
//     const p = document.getElementById(`text`);
//    p.innerText = 'This is really cool!';
// //    p.innerText = 'JavaScript is so cool. It lets me add text to my page programmatically.'
//     console.log(p);

// }