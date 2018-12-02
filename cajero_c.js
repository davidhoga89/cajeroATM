class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function access()
{
  if (senha.value == "1234")//contraseña temporal
  {
    inicio.style.display="none";//desactiva el bloque de inicio
    tablero.style.display="block";//activa el display input de dinero
  }
  else alert("Wrong Password, Try again!");
}

function operation()
{
    dinero=parseInt(input.value);//dinero a retirar, entrada
    output.innerHTML = "";//resetea la entrega, salida
      if (dinero <= sumatot)//verifica si el cajero tiene la cantidad solicitada
      {
        if (dinero>0 && dinero%10==0)//comprueba si los valores son positivos y multiplos de 10
        {
          for (var b of caja)//algoritmo
          {
            if (dinero>0)
            {
              division = Math.floor(dinero/b.valor);
              if (division>b.cantidad)
              {
                notes = b.cantidad;
              }
              else notes = division;
              entregado.push(new Billete(b.valor,notes));
              dinero = dinero - b.valor * notes;
            }
          }
        }
        else alert("Invalid value!");
      }
      else alert("El valor solicitado sobrepasa la cantidad que el cajero contiene.");
    console.log(entregado);
    for (var e of entregado)//muestra los billetes entregados
    {
       if (e.cantidad>0)
       {
        output.innerHTML += e.cantidad + " Billetes de £" + e.valor + "<img width=20% height=20% src=" + e.valor + ".jpg /><br />";
       }
    }
    entregado = [];//resetea el array de entrega
}

//MAIN()
console.log("la clave temporal es 1234");
var inicio = document.getElementById("my_inicio");//div de inicio para ingreso de pwd
var pwd = document.getElementById("my_acceso");
var senha = document.getElementById("my_senha");
pwd.addEventListener("click",access);

var tablero = document.getElementById("my_display");
tablero.style.display="none";//deshabilita el display mientras se ingresa pwd correcto
var w = document.getElementById("action");
var input = document.getElementById("my_input");
var output = document.getElementById("my_output");
w.addEventListener("click",operation);

var caja = [], entregado = [];
var division, dinero, notes;
caja.push(new Billete(50,10));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));
console.log(caja);
var sumatot=0;
for (var i of caja)
{
   sumatot = sumatot + (i.valor * i.cantidad);
}
console.log(sumatot);
