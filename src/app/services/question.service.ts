import { Injectable } from '@angular/core';
import { Questions } from '../constantes/Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  public GetBestAnswer(question:string):string{
    let result:string = "";

    question = question.toLowerCase().trim();

    let possibleQuestions:string[] = Array.from(Questions.CORRESPONDING_ANSWER.keys());
    let found:boolean = false;
    let matchRate:Map<number, string> = new Map();

    possibleQuestions.forEach(pq => {
      if(pq.length > question.length){
        matchRate.set(this.similarity(pq, question), pq);
      }else{
        matchRate.set(this.similarity(question, pq), pq);
      }
    });

    let maxRate:number = 0;
    let rates = Array.from(matchRate.keys());
    rates.forEach(r => {
      if(r > maxRate && r > 0.65){
        found = true;
        maxRate = r;
        let reponseRate = matchRate.get(r);
        if(reponseRate){
          let reponseTmp = Questions.CORRESPONDING_ANSWER.get(reponseRate);
          if(reponseTmp){
            result = reponseTmp;
          }else{
            found = false;
          }
        }else{
          found = false;
        }
      }
    })

    if(!found){
      result = Questions.NOT_FOUND
    }

    return result;
  }

  private similarity(s1:string, s2:string) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength.toString());
  }

  public editDistance(s1:string, s2:string) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
}
