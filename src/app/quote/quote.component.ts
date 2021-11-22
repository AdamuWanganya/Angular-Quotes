import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Live as if you were to die tomorrow. Learn as if you were to live forever.','- Mahatma Gandhi'),
    new Quote(2, 'Be yourself; everyone else is already taken.','― Oscar Wilde'),
    new Quote(3, 'Be the change that you wish to see in the world.','― Mahatma Gandhi'),
    new Quote(4, 'Learn as if you were to live forever.','― Mahatma Gandhi'),
    new Quote(5, 'We accept the love we think we deserve.','- inspirational love'),
    new Quote(6, 'The opposite of love is not hate, it is indifference.','― Elie Wiesel'),

  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
 
  constructor() { }

  ngOnInit() {
  }

}
