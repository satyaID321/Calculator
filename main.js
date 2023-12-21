const input = document.getElementById("inputbox");
const button = document.querySelectorAll("button");
const display = document.querySelector(".calculator");


let string = "";
   let arr = Array.from(button);

   arr.forEach((button) => {
     button.addEventListener("click", (e) => {
       function appendToDisplay(value) {
         input.value += value;

         document.addEventListener("keydown", (event) => {
           const keyPressed = event.key;
         });
       }

       if (e.target.innerHTML == "=") {
         string = eval(string);
         input.value = string;
       } else if (e.target.innerHTML == "AC") {
         string = "";
         input.value = string;
       } else if (e.target.innerHTML == "Del") {
        string = string.substring(0, string.length - 1);
         input.value = string;
       } else if (e.target.innerHTML == "%") {
         const regex = /([^*]+)\*([^%]+)/;
         const matches = input.value.match(regex);
         console.log(matches);
         if (matches) {
           const x = matches[1]; // Everything before *
           const y = matches[2]; // Everything after * but before %
           return percentage(x, y);
        }

         if (action == "decimal") {
           input.innerHTML = ".";
         }
       } else {
         string = string + e.target.innerHTML;
         input.value = string;
       }
     });
   });

   function percentage(num, per) {
     return (input.value = (num / 100) * per);
   }