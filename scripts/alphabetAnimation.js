const alphabetStack = document.getElementById("alphabetStack");

for(let i = 0; i < window.screen.height / 16; i++){
    const alphabetRow = document.createElement("div");
    alphabetRow.classList.add("alphabet-row");
    const alphabetSpan = document.createElement("span");
    alphabetSpan.classList.add( i % 2 == 0 ? "animate-to-right" : "animate-to-left");
    const alphabet = document.createTextNode(`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`);
    alphabetSpan.appendChild(alphabet);
    alphabetSpan.style = "color: hsla(113, 100.00%, 31.00%, 0.05);";
    alphabetRow.appendChild(alphabetSpan);
    alphabetStack.appendChild(alphabetRow);
}
