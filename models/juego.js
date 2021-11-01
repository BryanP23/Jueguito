alert("1. Ingrese tu Nomnbre de Jugador \n2. Por cada pregunta correcta Ganaras 100.000 pesos colombianos \n3. Si te retiras te llevaras el dinero que lleves acomulado.\n4. Si te equivocas en alguna pregunta, perderas todo tu acomulado =( ")
    //creacion del objeto jugador
    class jugador  {
    constructor(name,puntos){
            this.name=name
            this.puntos=puntos
        }
    }


    //Creacion de Niveles 
    var nivel=[]
    var puntos=0
    var ciclo=0
    for (let index = 1; index <= 5; index++) {
        var subLvl = preguntas.filter(element => element.nivel == index);
        nivel.push(subLvl)
    }
    //preguntas aleatorias por cada nivel
    //aca genero una pregunta aleatoria por nivel y se selecciona una categoria, luego se ingresa a la matriz de niveles 
    var preguntasAleatorias = []
    for (let index = 0; index <= 4; index++) {
        var preguntasAleatoriasLvl = [(nivel[index][Math.abs(Math.round(Math.random()*(nivel[index].length)-1))])]
        preguntasAleatorias.push(preguntasAleatoriasLvl) 
    }
    

    //Funcion para inicio del juego  
    function mostrarPreguntas(){
        document.getElementById("preguntas").style.display = "initial";
        document.getElementById("pregunta").innerHTML= preguntasAleatorias[0][0].pregunta
        for (let index = 0; index < preguntasAleatorias[0][0].options.length; index++) {
            document.getElementById(`respuesta${index+1}`).innerHTML= preguntasAleatorias[0][0].options[index].text
        }
    }

    //validar respuesta
    function check(){
            
            //se vaida la respuesta que selecciona el usuario
            respuesta1 = document.getElementById(`buttom${1}`).checked
            respuesta2 = document.getElementById('buttom2').checked
            respuesta3 = document.getElementById('buttom3').checked
            respuesta4 = document.getElementById('buttom4').checked
            if (respuesta1) {respuesta=0}
            else if (respuesta2) {respuesta=1}
            else if (respuesta3) {respuesta=2}
            else if (respuesta4) {respuesta=3}
            else {alert("Seleccione una respuesta")
            return;}
            //se valida si la respuesta es correcta o erronea
            var result = preguntasAleatorias[ciclo][0].options[respuesta].value
            if (result==true){puntos=puntos+100
                alert(`Correcto, su puntuación es: ${puntos}`)
                ciclo+=1
                if(ciclo==5){alert(`Fin del jugeo\nSu puntajes es ${puntos}\nRecargar la pagina para volver a jugar `)
                saveData()
                document.getElementById("main").style.display = "none";
                }
                //de ser correcta se setean la pregunta y las respuestas del siguiente nivel
                else{
                for(let index = 1; index <= 4; index+=1){
                    document.getElementById(`buttom${index}`).checked=false
                }//set de la pegunta
                document.getElementById("question").innerHTML= preguntasAleatorias[ciclo][0].question
                for (let index = 0; index < preguntasAleatorias[ciclo][0].options.length; index++) {
                }//set de las opciones
                for (let index = 0; index < preguntasAleatorias[ciclo][0].options.length; index++) {
                document.getElementById(`respuesta${index+1}`).innerHTML= preguntasAleatorias[ciclo][0].options[index].text
                }
            }

            }
            // en caso de equivocarse se sale del juego y pierde sus puntos 
            else{puntos=0
            alert("Incorrecto, recragar para volver a empezar\nSu puntuación es 0")
            saveData()
            document.getElementById("main").style.display = "none";
            
            }
    }
    //funcion para retirarse
    function exit(){
        alert(`Usted se ha retirado\nSu puntuación es ${puntos/2}\nRecargar la pagina para volver a jugar`)
        puntos=puntos/2
        saveData()    
        document.getElementById("main").style.display = "none";
    }

    
   
    
    