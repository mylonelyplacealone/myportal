import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';
import { MenuItem } from '../sidebar/menuitem.model';

@Injectable({
    providedIn: 'root'
  })
export class AppDataService{ 

    menus:MenuItem[] = [
        new MenuItem('Home', 1, []),
        new MenuItem('Angular Basics', 1 , [
          new MenuItem('Interpolation', 2, [], 'Interpolation'),
          new MenuItem('Proprty Binding', 2, [], 'Property Binding'),
          new MenuItem('Two-Way Data Binding', 2, [], 'Two-Way Data Binding'),
          new MenuItem('Event Binding', 2, [], 'Event Binding'),
         ], ''),
        new MenuItem('Project Setup', 1 , [
          new MenuItem('Install NodeJS', 2, []),
          new MenuItem('Create Project', 2, []),
          new MenuItem('Build Command', 2, []),
          ]),
        new MenuItem('Project Structure', 1 , [
          new MenuItem('App Folder', 2, []),
          new MenuItem('App.Module.JS', 2, []),
          new MenuItem('.css.ts Files', 2, []),
          new MenuItem('.html.ts Files', 2, []),
          new MenuItem('.component.ts Files', 2, []),
          ]),
        new MenuItem('Routing', 1, []),
        new MenuItem('Pipes', 1, []),
        new MenuItem('Services', 1, []),
        new MenuItem('HTTP Client', 1, []),
        new MenuItem('Angular Animations', 1, []),
      ];

    filteredList:Chapter[] = [];
    links:Chapter[] = [
        new Chapter('Home', 'Heading 1', '1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Home', 'Heading 2', '2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Home', 'Heading 3', '3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Angular Basics', 'Interpolation', `<div class="col-md-12 articlebox row">
        Whenever you need to communicate properties (variables, objects, arrays, etc..) from the component class to the template, you can use interpolation.

          The format for defining interpolation in a template is: {{ propertyName }}

          Open up the /src/app/home/home.component.ts component file that we've been working on and define the following property and value:

          export class HomeComponent implements OnInit {

            itemCount: number = 4;

            constructor() { }

            ngOnInit() {
            }

          }
          Then, in /home.component.html update the following:

          <!-- From: -->
          <p>Your bucket list</p>

          <!-- To: -->
          <p>Your bucket list ({{ itemCount }})</p>
          If you save the project, you'll notice in the browser that we've used interpolation {{ }} to show the itemCount property in the browser.

          Of course, this itemCount property is not yet dynamic, but it will be shortly.
          `),
        new Chapter('Angular Basics', 'Property Binding', `

          Let's say for some reason, that we want to use the component class to control the value of our Add Item button text. We can do this through property binding.

          Open /home.component.ts and add the following property:

            itemCount: number = 4;
            btnText: string = 'Add an Item';    // Add this line
          Then, open /home.component.html and set the value property through property binding, to our btnText property:

          <!-- From: -->
          <input type="submit" class="btn" value="Add Item">

          <!-- To: -->
          <input type="submit" class="btn" [value]="btnText">
          Save, and you will see the new button value as defined in our component class. Simple enough!

          Note: You can also define property binding through interpolation:

          <!-- Interpolation -->
          <input type="submit" class="btn" value="{{ btnText }}">
          Property binding in Angular 5 is one-way, in that communication goes from the component class to the template.
          `),
        new Chapter('Angular Basics', 'Two-Way Data Binding', `
          What if we wanted to use our input textfield to both retrieve and set its value from a component class? We can use what's called ngModel to create that 2-way data binding.

          First, we have to import the FormsModule in order to have access to ngModule.

          Open up /src/app/app.module.ts and at the top within the imports, paste:

          import { FormsModule } from '@angular/forms';

          // Other imports removed for brevity

          @NgModule({
            ...
            imports: [
              BrowserModule,
              AppRoutingModule,
              FormsModule             // Add the FormsModule here
            ],
          Save this file.

          Revisit /home.component.ts and add a third property:

            itemCount: number = 4;
            btnText: string = 'Add an Item';
            goalText: string = 'My first life goal';    // Add this
          In the template file, add this to create a 2-way data binding:

          <!-- From: -->
          <input type="text" class="txt" name="item" placeholder="Life goal..">

          <!-- To: -->
          <input type="text" class="txt" name="item" placeholder="Life goal.." [(ngModel)]="goalText">

          <br><span>{{ goalText }}</span><br>
          If you reload, you will find that the component has communicated the default value of goalText to both the input and the span.

          Try changing the value of the input, and you will notice that goalText becomes updated from the template to the component, which is demonstrated by the span element that we added.

          You can go ahead and remove the <br><span> line, that was just for demonstration purposes.

          That, in a nutshell is how 2-way data binding works.
      `),
      new Chapter('Angular Basics', 'Event Binding', `
          Now that we know how to capture user input, how can we make our Add an Item button actually work and save the user-submitted data somewhere?

          That's where event binding comes in. We can use event binding to capture a variety of user-initiated events to initiate logic in our component class. Angular 5 supports many events listed here.
          
          Let's define a click event on our Add an Item button:
          
          <!-- From: -->
          <input type="submit" class="btn" value="{{ btnText }}">
          
          <!-- To: -->
          <input type="submit" class="btn" value="{{ btnText }}" (click)="addItem()">
          Note: We're not even passing in the value of the input field, because we've set it up to work with 2-way data binding.
          
          In the component class, let's create the addItem() method and also make some other adjustments:
          
          export class HomeComponent implements OnInit {
          
            itemCount: number = 4;
            btnText: string = 'Add an Item';
            goalText: string = 'My first life goal';
            goals = [];
          
            constructor() { }
          
            ngOnInit() {
              this.itemCount = this.goals.length;
            }
          
            addItem() {
              this.goals.push(this.goalText);
              this.goalText = '';
              this.itemCount = this.goals.length;
            }
          
          }
          At the top, we've added a new array called goals; This is where we will store the user entries. This, of course, is not being persisted in a database.
          
          Then, in the ngOnInit() lifecycle hook, which fires once when the component is loaded, we are setting the itemCount to the length (or number) of goals in the goal array.
          
          In our new method, we use javascript to push the current goalText to the array, then, reset the goalText value which clears out our input field, and then reset the itemCount.
          
          If you save the project and now use it, you will see the result in the browser. The Your Bucket List (#) will increase each time you add a new bucket list item.
      `),
      ];

    getLinks(parentlink:string){
        this.filteredList = this.links.filter((chapter: Chapter) => chapter.parentlinkname === parentlink);
        return this.filteredList;
    }
    
    getMenus(){
        return this.menus;
    }
 }