import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';

  contatos = [
    {id:1,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 1",menu:false},
    {id:2,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 2",menu:false},
    {id:3,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 3",menu:false},
    {id:4,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 4",menu:false},
    {id:5,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 5",menu:false},
    {id:6,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 6",menu:false},
    {id:7,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 7",menu:false},
    {id:8,foto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",nome:"teste 8",menu:false}
  ]

}
