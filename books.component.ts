import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books= [
    {'id':1, 'name':'Myth', 'description':'myth as a sacred narrative that explains how the world and humanity evolved into their present form.','image':'../../assets/myth.jpg'},
    {'id':2, 'name':'Romance', 'description':'A romance novel or romantic novel is a type of genre fiction novel which places its primary focus on the relationship.','image':'../../assets/romance.jpg'},
    {'id':3, 'name':'Novel', 'description':'A novel is a piece of long narrative in literary prose. Narrative prose is meant to entertain and tell a story. ','image':'../../assets/novel.jpg'},
    {'id':4, 'name':'Biography', 'description':'A biography, or simply bio, is a detailed description of a persons lifeUnlike a profile or curriculum vitae (résumé), a biography presents a subjects life story, highlighting various aspects of their life','image':'../../assets/biography.jpeg'},
    {'id':5, 'name':'Drama', 'description':'It is a coming-of-age story that explores themes of friendship, teamwork, inclusion, and determination through Callie and her relationship with the people around her','image':'../../assets/drama.jpg'},
    {'id':6, 'name':'History', 'description':'You can refer to the events of the past as history. You can also refer to the past events which concern a particular topic','image':'../../assets/history.jpg'},
    {'id':7, 'name':'Western', 'description':'Western is a literature, film, and television genre. Westerns are primarily set in the American Old West between the late eighteenth century and late nineteenth century','image':'../../assets/western.jpg'},
    {'id':8, 'name':'Poems', 'description':'Most poetry books contain between 30 and 100 poems, so its important to constantly be doing writing exercises and writing poems','image':'../../assets/poem.jpg'}
    
  ]
}
