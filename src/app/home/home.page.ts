import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
estadoLed1:boolean=false;
tableled1:any;
estadoLed2:boolean=false;
tableled2:any;
estadoLed3:boolean=false;
tableled3:any;
estado:boolean=false;

constructor(private db:Firestore){}

  async cambiarLed1(led:string){
  this.tableled1= doc(this.db,'controlLed',led);
  this.estadoLed1=!this.estadoLed1;
  await setDoc(this.tableled1,{encender:this.estadoLed1});
}

async cambiarLed2(led:string){
  this.tableled2= doc(this.db,'controlLed',led);
  this.estadoLed2=!this.estadoLed2;
  await setDoc(this.tableled2,{encender:this.estadoLed2});
}

async cambiarLed3(led:string){
  this.tableled3= doc(this.db,'controlLed',led);
  this.estadoLed3=!this.estadoLed3;
  await setDoc(this.tableled3,{encender:this.estadoLed3});
}

async apagarLeds(){
  const led1='LED1';
  const led2='LED2';
  const led3='LED3';
  this.tableled1= doc(this.db,'controlLed',led1);
  this.estadoLed1=!this.estadoLed1;
  this.tableled2= doc(this.db,'controlLed',led2);
  this.estadoLed2=!this.estadoLed2;
  this.tableled3= doc(this.db,'controlLed',led3);
  this.estadoLed3=!this.estadoLed3;
  await setDoc(this.tableled1,{encender:this.estadoLed1});
  await setDoc(this.tableled2,{encender:this.estadoLed2});
  await setDoc(this.tableled3,{encender:this.estadoLed3});
}







getColor1(state:boolean){
  if(state){
    return "sucess";
  }else{
    return "danger"
  }

}

getColor2(state:boolean){
  if(state){
    return "sucess";
  }else{
    return "danger"
  }

}

getColor3(state:boolean){
  if(state){
    return "sucess";
  }else{
    return "danger"
  }

}
getColor4(state:boolean){
  if(state){
    return "sucess";
  }else{
    return "danger"
  }

}
  

  
  

}
