var vlrdisplay = 0;
var vlrAnterior = "" ;

class CalcController{

    constructor(){

        this._visor = document.querySelector("#formulario");
        this._visor2 = document.querySelector("#formulario2");
        this._data = document.querySelector("#data");
        this._hora = document.querySelector("#hora"); 
        
        this.initialize();
        this.calcular();
    }

    initialize(){                    
        
        this.dataHoraInicializa();

        this._visor.value = "";
        setInterval(()=>{

         this.dataHoraInicializa();

        },1000);       
    }

    dataHoraInicializa(){
       /* this._data.innerHTML = new Date().toLocaleDateString('pt-BR',{
            day:"2-digit",
            month:"long",
            year:"numeric"
        }); */

        this._data.innerHTML = new Date().toLocaleDateString('pt-BR');
        this._hora.innerHTML = new Date().toLocaleTimeString('pt-BR');
    }

    exibeMensagemAposSegundos(){

        setTimeout(() => {
            alert("Oi.. Aqui poderia ser exibido alguma publicidade no seu site");
        }, 5000);

    }

    calcular(){
        //let eventos =["drag","mouseouver"];
        let eventos = ["click"];
        var valor = window.document.querySelectorAll("td");
        var resultado = window.document.getElementById("formulario");        
    
          valor.forEach((btn)=> {           

            eventos.forEach((evento)=>{
                btn.addEventListener(evento, e =>{
                    let vTecla =  btn.className.replace("ln-","");
                    var vlr = this.validaTeclas(vTecla);
                    if(vlr != "" && vlr !="X"){
                        this.displayCalc = vlrAnterior + vlr;
                        vlrAnterior = this._visor.innerHTML;                        
                    }else{
                        vlrAnterior="";
                    }
                });
            });

            btn.style.cursor = "pointer";
                             
        });
    }

    limpaVisor(){
        this.displayCalc="";
        return "";
    }
    validaTeclas(tecla){


        switch (tecla) {
            case "ponto": return ".";                
                break;
            case "virgula": return ",";                
                break;                
            case "igual": return "=";                
                break;                
            case "multiplicacao": 
                    vlrdisplay = this._visor.innerHTML;
                    if (this._visor2.innerHTML !=""){
                        
                        this._visor2.innerHTML = +this._visor2.innerHTML.replace(" x","") * +vlrdisplay ;                                    
                    }else{
                    this._visor2.innerHTML =  +this._visor2.innerHTML + vlrdisplay+ ' x';
                    }
                    this._visor.innerHTML = ""; 
                    vlrAnterior = "";
            
                   
                  return 'X';                
                break;                
            case "divisao": return "/";                
                break;                              
            case "subtracao": return "-";                
                break; 
            case "backspace": return "<=";                
                break;                                                
            case "percentual": return "%";                
                break; 
            case "adicao": return "+";                
                break;  
            case "C" : return this.limpaVisor();
                break;                   
                
            default : return tecla;    
        }

    }



    get displayCalc(){
        return this._visor.innerHTML;
    }

    set displayCalc(valor){
        this._visor.innerHTML = valor;
    }

    get currentDate(){       
        return this._data;
    }

    set currentDate(valor){
        this._data.innerHTML = valor;
    }

    get currentTime(){
        return this._hora.innerHTML;
    }

    set currentTime(valor){
        this._hora.innerHTML = valor;
    }


}