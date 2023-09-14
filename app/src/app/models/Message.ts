export class Message{
    content:string;
    isFromUser:boolean;
    isClickable:boolean;

    constructor(content:string, isFromUser:boolean, isClickable:boolean) {
        this.content = content;
        this.isFromUser = isFromUser;
        this.isClickable = isClickable;
      }
}