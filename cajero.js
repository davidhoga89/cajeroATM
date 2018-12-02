function calcular()
{
    var valor=entrada.value;
    console.log(sumatot);
    var temp, temp2;
    if (valor%10==0 && valor>0){ //verifica que sea positivo y multiplo de 10
      if (valor <= sumatot){ //verifica que se pueda dar la cantidad solicitada
          if (Math.floor(valor/50)>capacidad[0]){
             billetes[0]=capacidad[0];
             temp = valor - billetes[0]*50;
          }
          else{
            billetes[0] = Math.floor(valor/50);
            temp = valor - billetes[0]*50;
          }
          if (Math.floor(temp/20)>capacidad[1]){
             billetes[1]=capacidad[1];
             temp2 = temp - billetes[1]*20;
          }
          else{
            billetes[1] = Math.floor(temp/20);
            temp2 = temp - billetes[1]*20;
          }
          billetes[2] = Math.floor(temp2/10);

      //console.log(billetes);
      salida.innerHTML = "Received: <br>" + billetes[0] + " Billetes de $50K <br>" +  billetes[1] + " Billetes de $20K <br>" +  billetes[2] + " Billetes de $10K";
      }
      else alert("El valor solicitado sobrepasa la cantidad que el cajero contiene.");
    }
    else alert("Porfavor ingresar una cantidad valida (multiplo de 10 mayor a 0).");
}

function acceso()
{
  if (pwd.value=="popo123"){
    alert("Bienvenido!");
    contra.style.display="none";
    formato.style.display="block";
  }
  else alert("Wrong Password, Try again!");
}

//MAIN()
var contra = document.getElementById("my_contra");
var formato = document.getElementById("my_formato");
formato.style.display = "none";
var pwd = document.getElementById("my_pwd");
var access = document.getElementById("my_acceso");
access.addEventListener("click",acceso);

var entrada = document.getElementById("my_entrada");
var retirar = document.getElementById("my_retirar");
var salida = document.getElementById("my_salida");

var billetes =[], capacidad =[8,2,6];
var sumatot = (capacidad[0]*50) + (capacidad[1]*20) + (capacidad[2]*10);
retirar.addEventListener("click",calcular);
