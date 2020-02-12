import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Envio para los link
// **************************IMPORT REACTIVEFORMSMODULE*****************************
import { ReactiveFormsModule } from '@angular/forms';
// +++++++++++++++++++++COMPONENTES AGREGADOS A LA CARPETA APP++++++++++++++++++++++
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      TopBarComponent,
      NameEditorComponent,
      ProfileEditorComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent }, // Agregar un enrutamiento
      ])
      // ApartadoparacolocarlosimportagregadosdeAngular\nimportCartComponentfrom'./cart/cart.component';\nRouterModule.forRoot([\n{path
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
