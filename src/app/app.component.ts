import { Component } from '@angular/core';
import {lorem,image} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypingGame';
  randomText=lorem.sentence();
  // randomImage=image.food();
  inputText='';
  flag=false;


  onTypeEvent(event:any){

    const inputWords=event.target.value;
      this.inputText=inputWords;

    if(this.inputText===this.randomText){
      this.flag=!this.flag;   //flag will be true
    }
    else{
      this.flag=false;
    }
    console.log(inputWords);



  }

  onCompareWords(randomWord:string,inputWord:string){

    if(!inputWord){
      return 'pending'
    }
    

      return randomWord===inputWord ? 'CorrectWord':'Incorrect';

  }
  

}
