export class Quote {
 public showAuthor: boolean;
  constructor(public id: number,public name: String,public author: String,public post:String,public completeDate: Date){
    this.showAuthor =false;
  }
}

