import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Live as if you were to die tomorrow. Learn as if you were to live forever.','- Mahatma Gandhi','Hassan',new Date(2012,7,12)),
    new Quote(2, 'Be yourself; everyone else is already taken.','― Oscar Wilde','Cindy',new Date(2013,7,12)),
    new Quote(3, 'Be the change that you wish to see in the world.','― Mahatma Gandhi','Adamu',new Date(2018,7,12)),
    new Quote(4, 'Learn as if you were to live forever.','― Mahatma Gandhi','Everyline',new Date(2014,7,12)),
    new Quote(5, 'We accept the love we think we deserve.','- inspirational love','Cosma',new Date(2020,7,12)),
    new Quote(6, 'The opposite of love is not hate, it is indifference.','― Elie Wiesel','Mohammed',new Date(2015,1,13)),

  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
 
  constructor() { }

  ngOnInit() {
  }

}
