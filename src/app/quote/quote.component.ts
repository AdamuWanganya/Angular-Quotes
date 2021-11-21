import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Live as if you were to die tomorrow. Learn as if you were to live forever.'},
    {id:2, name: 'Be yourself; everyone else is already taken.'},
    {id:3, name: 'Be the change that you wish to see in the world.'},
    {id:4, name: 'Learn as if you were to live forever.'},
    {id:5, name: 'We accept the love we think we deserve.'},
    {id:6, name: 'The opposite of love is not hate, it is indifference.'},

  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
