import { Component } from '@angular/core';
declare const saveDocument: any;
declare const loadDocument: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'my-editor-app';
	
	onClickSave() {
		saveDocument();
	}

	onClickLoad() {
		loadDocument();
	}
}
