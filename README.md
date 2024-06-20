# VesaxNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


// enfant.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private childrenData = new BehaviorSubject<any[]>([]);
  childrenData$ = this.childrenData.asObservable();

  addChildData(childData: any) {
    const currentData = this.childrenData.value;
    this.childrenData.next([...currentData, childData]);
  }

  updateChildData(index: number, childData: any) {
    const currentData = this.childrenData.value;
    currentData[index] = childData;
    this.childrenData.next([...currentData]);
  }

  deleteChildData(index: number) {
    const currentData = this.childrenData.value;
    currentData.splice(index, 1);
    this.childrenData.next([...currentData]);
  }

  getChildrenData() {
    return this.childrenData.value;
  }
}


// family-form.component.ts
import { Component } from '@angular/core';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html'
})
export class FamilyFormComponent {
  childrenCount = 0;
  maxChildren = 20;

  constructor(private enfantService: EnfantService) {}

  get childrenArray() {
    return new Array(this.childrenCount);
  }

  addChild() {
    if (this.childrenCount < this.maxChildren) {
      this.childrenCount++;
      this.enfantService.addChildData({ name: '', age: '', gender: '' });
    } else {
      console.log("Le nombre maximum d'enfants est atteint.");
    }
  }

  deleteChild(index: number) {
    this.enfantService.deleteChildData(index);
    this.childrenCount--;
  }

  logChildrenData() {
    console.log(this.enfantService.getChildrenData());
  }
}


<div>
  <h1>Famille</h1>
  <button (click)="addChild()">Ajouter un enfant</button>
  <div *ngFor="let child of childrenArray; let i = index">
    <app-child-form [index]="i" (deleteChild)="deleteChild(i)"></app-child-form>
  </div>
  <button (click)="logChildrenData()">Voir les données</button>
</div>



// child-form.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html'
})
export class ChildFormComponent implements OnInit {
  @Input() index: number;
  @Output() deleteChild = new EventEmitter<void>();
  childForm: FormGroup;

  constructor(private fb: FormBuilder, private enfantService: EnfantService) {
    this.childForm = this.fb.group({
      name: [''],
      age: [''],
      gender: ['']
    });
  }

  ngOnInit() {
    this.childForm.valueChanges.subscribe(value => {
      this.enfantService.updateChildData(this.index, value);
    });
  }

  onDelete() {
    this.deleteChild.emit();
  }
}


<div [formGroup]="childForm">
  <h2>Enfant {{ index + 1 }}</h2>
  <label for="name-{{index}}">Nom:</label>
  <input id="name-{{index}}" formControlName="name" />

  <label for="age-{{index}}">Âge:</label>
  <input id="age-{{index}}" formControlName="age" type="number" />

  <label for="gender-{{index}}">Sexe:</label>
  <input id="gender-{{index}}" formControlName="gender" />

  <button type="button" (click)="onDelete()">Supprimer</button>
</div>
