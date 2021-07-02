const btn 	= document.querySelector("button");
const texto	= document.querySelector("#grafar");
const area 	= document.querySelector("#grafado");
const chave 	= document.getElementById("chave");
const condicao 	= document.querySelector(".t");
const condic 	= document.querySelector(".u");
const info     	= document.querySelector("#right");
let count = 1.5;

info.onclick = () =>{
	count += 1.5;
	if(count%3 === 0){
  		document.querySelector("#info").style.display = "block";
	}else{
		document.querySelector("#info").style.display = "none";
	}
}

function cifraVigenere(str, palavra){
  let a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let b = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
  let c = ['c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b'];
  let d = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'];
  let e = ['e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d'];
  let f = ['f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e'];
  let g = ['g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f'];
  let h = ['h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g'];
  let i = ['i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h'];
  let j = ['j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i'];
  let k = ['k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j'];
  let l = ['l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k'];
  let m = ['m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l'];
  let n = ['n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];
  let o = ['o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  let p = ['p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
  let q = ['q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
  let r = ['r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
  let s = ['s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'];
  let t = ['t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s'];
  let u = ['u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];
  let v = ['v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'];
  let w = ['w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v'];
  let x = ['x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w'];
  let y = ['y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
  let z = ['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];

  
  let joinStr    = str.split(" ").join("").toLowerCase();
  let arrayStr   = joinStr.split("");
  let modelo = newTexto(palavra, str);
  let indice = [];
  let criptografado = [];
   
   if(condicao.checked){
     for(let i = 0; i < arrayStr.length; i++){
        indice.push(a.findIndex(value => {
          if(value == arrayStr[i]){
            return value;
          }
        }));
     }
      for(let modStr of modelo){
        switch(modStr){
          case "a":
            criptografado.push(a[indice[0]]);
            indice.shift();
          break;
          case "b":
            criptografado.push(b[indice[0]]);
            indice.shift();
          break;
          case "c":
            criptografado.push(c[indice[0]]);
            indice.shift();
          break;
          case "d":
            criptografado.push(d[indice[0]]);
            indice.shift();
          break;
          case "e":
            criptografado.push(e[indice[0]]);
            indice.shift();
          break;
          case "f":
            criptografado.push(f[indice[0]]);
            indice.shift();
          break;
          case "g":
            criptografado.push(g[indice[0]]);
            indice.shift();
          break;
          case "h":
            criptografado.push(h[indice[0]]);
            indice.shift();
          break;
          case "i":
            criptografado.push(i[indice[0]]);
            indice.shift();
          break;
          case "j":
            criptografado.push(j[indice[0]]);
            indice.shift();
          break;
          case "k":
            criptografado.push(k[indice[0]]);
            indice.shift();
          break;
          case "l":
            criptografado.push(l[indice[0]]);
            indice.shift();
          break;
          case "m":
            criptografado.push(m[indice[0]]);
            indice.shift();
          break;
          case "n":
            criptografado.push(n[indice[0]]);
            indice.shift();
          break;
          case "o":
            criptografado.push(o[indice[0]]);
            indice.shift();
          break;
          case "p":
            criptografado.push(p[indice[0]]);
            indice.shift();
          break;
          case "q":
            criptografado.push(q[indice[0]]);
            indice.shift();
          break;
          case "r":
            criptografado.push(r[indice[0]]);
            indice.shift();
          break;
          case "s":
            criptografado.push(s[indice[0]]);
            indice.shift();
          break;
          case "t":
            criptografado.push(t[indice[0]]);
            indice.shift();
          break;
          case "u":
            criptografado.push(u[indice[0]]);
            indice.shift();
          break;
          case "v":
            criptografado.push(v[indice[0]]);
            indice.shift();
          break;
          case "w":
            criptografado.push(w[indice[0]]);
            indice.shift();
          break;
          case "x":
            criptografado.push(x[indice[0]]);
            indice.shift();
          break;
          case "y":
            criptografado.push(y[indice[0]]);
            indice.shift();
          break;
          case "z":
            criptografado.push(z[indice[0]]);
            indice.shift();
          break;
        }
      }
     }else if(condic.checked){
       console.log("descriptografando");
       for(let modStr of modelo){
         switch(modStr){
           case "a":
              indice.push(a.indexOf(arrayStr[0]));
              arrayStr.shift();
           break;
           case "b":
             indice.push(b.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "c":
             indice.push(c.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "d":
             indice.push(d.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "e":
             indice.push(e.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "f":
             indice.push(f.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "g":
             indice.push(g.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "h":
             indice.push(h.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "i":
             indice.push(i.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "j":
             indice.push(j.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "k":
             indice.push(k.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "l":
             indice.push(l.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "m":
             indice.push(m.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "n":
             indice.push(n.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "o":
             indice.push(o.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "p":
             indice.push(p.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "q":
             indice.push(q.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "r":
             indice.push(r.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "s":
             indice.push(s.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "t":
             indice.push(t.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "u":
             indice.push(u.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "v":
             indice.push(v.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "w":
             indice.push(w.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "x":
             indice.push(x.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "y":
             indice.push(y.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
           case "z":
             indice.push(z.indexOf(arrayStr[0]));
             arrayStr.shift();
           break;
         }
       }
      
       while(indice.length > 0){
         criptografado.push(a[indice[0]]);
         indice.shift();
       }
     }
       area.innerHTML = criptografado.join("");
     
}

function newTexto(str1, str2){
     let newStr2 = str2.split(" ").join("");
     let newStr = str1.repeat(newStr2.length);
     let textoArray = [];
     let arrayStr = newStr2.split("");
     let arrayTexto = newStr.split("");
        while(arrayTexto.length != arrayStr.length){
          arrayTexto.pop();
        }                                                      
     return arrayTexto.join("");
}
btn.onclick = () => {
cifraVigenere(texto.value, chave.value);
}