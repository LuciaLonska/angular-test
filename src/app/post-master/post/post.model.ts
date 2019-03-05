
export class Post {
    public userId: string;
    public id: string;
    public title: string;
    public body: string;
    public comments: string[]

    constructor(userId: string, id: string, title: string, body: string, comments:string[]){
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body;
      this.comments = comments;
    }
}
