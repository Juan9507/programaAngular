import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// **************************IMPORT REACTIVEFORMSMODULE*****************************
import { ReactiveFormsModule } from '@angular/forms';
// +++++++++++++++++++++COMPONENTES AGREGADOS A LA CARPETA APP++++++++++++++++++++++
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Apartado para colocar los import agregados de Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
