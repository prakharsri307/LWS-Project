import { LightningElement,track } from 'lwc';

export default class CarSearch extends LightningElement {
   
    @track carTypeId='';
    

    carTypeSelectHandler(event)
    {
        console.log(this.carTypeId);
        console.log("Type before initialisation: ", typeof(this.carTypeId));
        this.carTypeId=event.detail;
        console.log(this.carTypeId);
        console.log("Type after setting value: ", typeof(this.carTypeId));
    }
}