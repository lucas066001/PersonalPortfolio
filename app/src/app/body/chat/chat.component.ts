import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Questions } from 'src/app/constantes/Questions';
import { Message } from 'src/app/models/Message';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  public isFirstShow:boolean = true;
  public isChatVisible:boolean = false;
  public currentMessage:string = ""; 
  public isTypingMessage:boolean = false;

  @ViewChild('chatButton') chatButton: ElementRef | undefined;
  @ViewChild('chatCard') chatCard: ElementRef | undefined;
  @ViewChild('messageListId') private messageListElement: ElementRef | undefined;

  constructor(private renderer: Renderer2, private questionService:QuestionService){
    this.renderer.listen('window', 'click',(e:Event)=>{

      if(e.target !== this.chatButton?.nativeElement && e.target!==this.chatCard?.nativeElement && !this.chatCard?.nativeElement.contains(e.target) && !this.chatButton?.nativeElement.contains(e.target)){
          this.isChatVisible = false;
      }
    });
  }

  private hiddenMessageList: Message[] = [
    new Message("Bonjour, moi c'est Lucas ! (enfin juste son site web pour le moment)", false, false),
    new Message("Vous pouvez quand même me poser quelques questions, essayez avec : ", false, false),
    new Message("Es-tu disponible ?", false, true),
    new Message("Quels sont tes projets ?", false, true),
    new Message("Que fais-tu actuellement ?", false, true),
    new Message("Comment te contacter ?", false, true),
  ];

  public messageList: Message[] = [];

  public updateChatVisibility(){
    this.isChatVisible = !this.isChatVisible;
    if(this.isFirstShow){
      this.hiddenMessageList.forEach(msg =>{
          this.addMessage(msg.content, msg.isClickable);
      })
      this.isFirstShow = false;
    }
  }

  public async sendMessage(content:string|undefined){

    let question:string = "";

    if(content){
      question = content;
    }else{
      question = this.currentMessage;
      this.currentMessage = "";
    }

    let possibleReponse = Questions.CORRESPONDING_ANSWER.get(question); 

    this.messageList.push(new Message(question, true, false));
    await this.delay(1);
    this.scrollToBottom();
    possibleReponse = this.questionService.GetBestAnswer(question);
    this.addMessage(possibleReponse, false);
    
  }

  public sendMessageFromClick(content:string , isClickable:boolean){
    if(isClickable){
      this.sendMessage(content);
    }
  }

  private async addMessage(message:string,  isClickable:boolean){
    this.isTypingMessage = true;
    await this.delay(1);
    this.scrollToBottom();

    await this.delay(2500);
      this.isTypingMessage = false;
      this.messageList.push(new Message(message, false, isClickable));
      this.scrollToBottom();
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public scrollToBottom(){
    if(this.messageListElement){
      this.messageListElement.nativeElement.scrollTop = this.messageListElement.nativeElement.scrollHeight;
    }
  }
}
