import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
   numberOfLikes : number = 0;
numberOfDislikes: number = 0;
likeButtonClick() {
this.numberOfLikes ++;
}
dislikeButtonClick(){
this.numberOfDislikes ++;
} 
  
  constructor() { }

  ngOnInit() {
  }

}
