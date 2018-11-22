import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';
import { MenuItem } from '../sidebar/menuitem.model';

@Injectable({
    providedIn: 'root'
  })
export class AppDataService{ 

  menus:MenuItem[] = [
      new MenuItem('Getting Started', 1, "1_gettingstarted", "glyphicon glyphicon-globe", [
        new MenuItem('Architecture', 2, "1_gettingstarted", "glyphicon glyphicon-tag", [], '2_architecture'),
        new MenuItem('Setup Dev Environment', 2, "1_gettingstarted", "glyphicon glyphicon-tasks", [], '3_setupdevelopmentenvironment'),
        new MenuItem('First Angular App', 2, "1_gettingstarted", "glyphicon glyphicon-user", [], '4_firstapp'),
        new MenuItem('Project Structure', 2, "1_gettingstarted", "glyphicon glyphicon-fullscreen", [], '5_projectstructure'),
        new MenuItem('Version History', 2, "1_gettingstarted", "glyphicon glyphicon-send",[],  '6_versionhistory'),
      ],  '1_gettingstarted'),

      new MenuItem('Angular Fundamentals', 1, "2_fundamentals", "glyphicon glyphicon-globe", [
        new MenuItem('Components', 2, "2_fundamentals", "glyphicon glyphicon-tag", [], '2_components'),
        new MenuItem('Directives', 2, "2_fundamentals", "glyphicon glyphicon-tasks", [], '3_directives'),
        new MenuItem('Services', 2, "2_fundamentals", "glyphicon glyphicon-user", [], '4_services'),
      ],  '1_fundamentals'),

      new MenuItem('Data and Event Binding', 1, "3_dataandeventhandling", "glyphicon glyphicon-globe", [
        new MenuItem('Property Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-tasks", [], '2_propertybinding'),
        new MenuItem('Attribute Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-user", [], '3_attributebinding'),
        new MenuItem('Adding Bootstrap', 2, "3_dataandeventhandling", "glyphicon glyphicon-fullscreen", [], '4_addingbootstrap'),
        new MenuItem('Class Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-send",[],  '5_classbinding'),
        new MenuItem('Style Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-tasks", [], '6_stylebinding'),
        new MenuItem('Event Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-user", [], '7_eventbinding'),
        new MenuItem('Event Filtering', 2, "3_dataandeventhandling", "glyphicon glyphicon-fullscreen", [], '8_eventfiltering'),
        new MenuItem('Template Variables', 2, "3_dataandeventhandling", "glyphicon glyphicon-send",[],  '9_templatevariables'),
        new MenuItem('Two-Way Binding', 2, "3_dataandeventhandling", "glyphicon glyphicon-tasks", [], '10_twowaybinding'),
        new MenuItem('Pipes', 2, "3_dataandeventhandling", "glyphicon glyphicon-user", [], '11_pipes'),
      ],  '1_introduction'), 

      new MenuItem('Reusable Components', 1, "4_reusablecomponents", "glyphicon glyphicon-globe", [
        new MenuItem('Input Property', 2, "4_reusablecomponents", "glyphicon glyphicon-tag", [], '2_inputproperty'),
        new MenuItem('Output Property', 2, "4_reusablecomponents", "glyphicon glyphicon-tasks", [], '3_outputproperty'),
        new MenuItem('View Encapsulation', 2, "4_reusablecomponents", "glyphicon glyphicon-user", [], '4_viewencapsulation'),
        new MenuItem('ng Content', 2, "4_reusablecomponents", "glyphicon glyphicon-fullscreen", [], '5_ngcontent'),
        new MenuItem('ng Container', 2, "4_reusablecomponents", "glyphicon glyphicon-send",[],  '6_ngcontainer'),
      ],  '1_introduction'),

      new MenuItem('Forms', 1, "5_forms", "glyphicon glyphicon-globe", [
        new MenuItem('Template Driven Forms', 2, "5_forms", "glyphicon glyphicon-tag", [], '2_templatedrivenforms'),
        new MenuItem('Reactive Forms', 2, "5_forms", "glyphicon glyphicon-tasks", [], '3_reactiveforms'),
      ],  '1_introduction'),

      new MenuItem('HTTP Client', 1, "6_httpservices", "glyphicon glyphicon-globe", [
        new MenuItem('HTTP Interceptors', 2, "6_httpservices", "glyphicon glyphicon-tasks", [], '2_httpintercepters'),
      ],  '1_introduction'),

      new MenuItem('Routing', 1, "7_routing", "glyphicon glyphicon-globe", [
        new MenuItem('Configuring Routes', 2, "7_routing", "glyphicon glyphicon-tag", [], '2_configuringroutes'),
        new MenuItem('Route & Query Parameters', 2, "7_routing", "glyphicon glyphicon-tasks", [], '3_routeandqueryparameters'),
      ],  '1_introduction'),

      new MenuItem('Animations', 1, "8_animations", "glyphicon glyphicon-globe", [],  '1_animations'),
  ];

  // [
  //   new MenuItem('Welcome', 1, [], "glyphicon glyphicon-globe", 'welcome'),
  //   new MenuItem('Envirnment Setup', 1, [], "glyphicon glyphicon-wrench", 'environmentsetup'),
  //   new MenuItem('Project Structure', 1, [
  //     new MenuItem('Angular Module', 2, [], "glyphicon glyphicon-tag", 'angularmodule'),
  //     new MenuItem('Angular Components', 1, [], "glyphicon glyphicon-facetime-video", 'angularcomponents'),
  //     new MenuItem('Angular Templating', 1, [], "glyphicon glyphicon-align-center", 'angulartemplating'),
  //     new MenuItem('Angular CSS', 1, [], "glyphicon glyphicon-gift", 'angularcss'),
  //   ], "glyphicon glyphicon-tasks", 'projectstructure'),
  //   // new MenuItem('Angular Module', 1, [], 'angularmodule'),
  //   // new MenuItem('Angular Components', 1, [], 'angularcomponents'),
  //   // new MenuItem('Angular Templating', 1, [], 'angulartemplating'),
  //   // new MenuItem('Angular CSS', 1, [], 'angularcss'),
  //   new MenuItem('Angular Services', 1, [], "glyphicon glyphicon-fullscreen", 'services'),
  //   new MenuItem('Angular Routing', 1, [], "glyphicon glyphicon-send", 'routing'),
  //   new MenuItem('HTTP Client', 1, [], "glyphicon glyphicon-user", 'httpclient'),
  //   new MenuItem('Angular Animations', 1, [], "glyphicon glyphicon-plane", 'animations'),
    
  // ];

    // menus:MenuItem[] = [
    //     new MenuItem('Home', 1, [], ''),
    //     new MenuItem('About', 1, [], 'about'),
    //     new MenuItem('Contact', 1, [], 'contact'),
    //     new MenuItem('Location', 1, [], 'location'),
    //     new MenuItem('Angular Basics', 1 , [
    //       new MenuItem('Interpolation', 2, [], 'Interpolation'),
    //       new MenuItem('Proprty Binding', 2, [], 'Property Binding'),
    //       new MenuItem('Two-Way Data Binding', 2, [], 'Two-Way Data Binding'),
    //       new MenuItem('Event Binding', 2, [], 'Event Binding'),
    //      ], ''),
    //     new MenuItem('Project Setup', 1 , [
    //       new MenuItem('Install NodeJS', 2, []),
    //       new MenuItem('Create Project', 2, []),
    //       new MenuItem('Build Command', 2, []),
    //       ]),
    //     new MenuItem('Project Structure', 1 , [
    //       new MenuItem('App Folder', 2, []),
    //       new MenuItem('App.Module.JS', 2, []),
    //       new MenuItem('.css.ts Files', 2, []),
    //       new MenuItem('.html.ts Files', 2, []),
    //       new MenuItem('.component.ts Files', 2, []),
    //       ]),
    //     new MenuItem('Routing', 1, []),
    //     new MenuItem('Pipes', 1, []),
    //     new MenuItem('Services', 1, []),
    //     new MenuItem('HTTP Client', 1, []),
    //     new MenuItem('Angular Animations', 1, []),
    //   ];

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