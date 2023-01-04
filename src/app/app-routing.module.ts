import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },

  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'view1',
    loadChildren: () => import('./view1/view1.module').then( m => m.View1PageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },{
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'light',
    loadChildren: () => import('./light/light.module').then( m => m.LightPageModule)
  },
  {
    path: 'light-view',
    loadChildren: () => import('./light-view/light-view.module').then( m => m.LightViewPageModule)
  },
  {
    path: 'cvother',
    loadChildren: () => import('./cvother/cvother.module').then( m => m.CvotherPageModule)
  },
  {
    path: 'carving',
    loadChildren: () => import('./carving/carving.module').then( m => m.CarvingPageModule)
  },
  {
    path: 'cview',
    loadChildren: () => import('./cview/cview.module').then( m => m.CviewPageModule)
  },   {
    path: 'light1',
    loadChildren: () => import('./light1/light1.module').then( m => m.Light1PageModule)
  },
  {
    path: 'light2',
    loadChildren: () => import('./light2/light2.module').then( m => m.Light2PageModule)
  },
  {
    path: 'electrician',
    loadChildren: () => import('./electrician/electrician.module').then( m => m.ElectricianPageModule)
  },
  {
    path: 'light1view',
    loadChildren: () => import('./light1view/light1view.module').then( m => m.Light1viewPageModule)
  },
  {
    path: 'light2view',
    loadChildren: () => import('./light2view/light2view.module').then( m => m.Light2viewPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ebook',
    loadChildren: () => import('./ebook/ebook.module').then( m => m.EbookPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'rentalentryform',
    loadChildren: () => import('./rentalentryform/rentalentryform.module').then( m => m.RentalentryformPageModule)
  },
  {
    path: 'rental-update',
    loadChildren: () => import('./rental-update/rental-update.module').then( m => m.RentalUpdatePageModule)
  },
  {
    path: 'detail-view',
    loadChildren: () => import('./detail-view/detail-view.module').then( m => m.DetailViewPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
