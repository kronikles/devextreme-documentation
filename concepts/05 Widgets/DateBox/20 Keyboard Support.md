An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th><a href="/Documentation/Guide/Widgets/DateBox/Platform-Specific_Value_Pickers">Value Picker</a></th>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr></tr>
    <tr>
      <td rowspan="2">All</td>
      <td style="font-style:italic; text-align:center">Alt + &darr; / Alt + &uarr;</td>
      <td>Opens/closes the value picker.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>Closes the date/time picker.</td>
    </tr>
    <tr>
      <td rowspan="4">Calendar</td>
      <td style="font-style:italic; text-align:center">&larr; &rarr; &uarr; &darr;</td>
      <td>Moves focus to the day nearby.</td>
    </tr>
    <tr>
      <td>Page Up or Ctrl + &larr;</td>
      <td>Displays the previous month.</td>
    </tr>
    <tr>
      <td>Page Down or Ctrl + &rarr;</td>
      <td>Displays the next month.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the focused day.</td>
    </tr>
    <tr>
      <td rowspan="2">List</td>
      <td style="font-style:italic; text-align:center">&uarr; / &darr;</td>
      <td>Moves focus to the previous/next time value.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the focused time value.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let dateBox =  $("#dateBoxContainer").dxDateBox("instance");
        dateBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        dateBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxDateBoxModule, DxDateBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxDateBoxComponent, { static: false }) dateBox: DxDateBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxDateBoxComponent) dateBox: DxDateBoxComponent
        ngAfterViewInit () {
            this.dateBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.dateBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
- [DateBox API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')

[tags]date box, dateBox, navigation, accessibility, keyboard shortcuts