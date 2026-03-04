import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

plants:any[]=[];

APIURL="http://localhost:5038/api/plants/";

constructor(private http:HttpClient){
this.refreshPlants();
}

refreshPlants(){

this.http.get(this.APIURL+"GetPlants")
.subscribe((data:any)=>{
this.plants=data;
});

}

addPlant(){

let plantName=(<HTMLInputElement>document.getElementById("newPlant")).value;
let sunlight=(<HTMLInputElement>document.getElementById("newSunlight")).value;
let water=(<HTMLInputElement>document.getElementById("newWater")).value;
let type=(<HTMLInputElement>document.getElementById("newType")).value;
let lastWatered=(<HTMLInputElement>document.getElementById("newLastWatered")).value;

const formData=new FormData();

formData.append("plantName",plantName);
formData.append("sunlight",sunlight);
formData.append("water",water);
formData.append("type",type);
formData.append("lastWatered",lastWatered);

this.http.post(this.APIURL+"AddPlant",formData)
.subscribe(()=>{
this.refreshPlants();
});

}

deletePlant(id:any){

this.http.delete(this.APIURL+"DeletePlant?id="+id)
.subscribe(()=>{
this.refreshPlants();
});

}

}
