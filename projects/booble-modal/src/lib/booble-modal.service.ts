import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoobleModalService {

  componentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  present(component: any, data?: any) {
    if (this.componentRef)
      this.dismiss();

    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.applicationRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    try {
      this.componentRef.instance.boobleModalData = data;
    } catch (error) {
      console.log('Property boobleModalData not found in modal component');
    }

    document.body.prepend(domElem);
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';

    return {
      dismiss: this.dismiss
    };
  }

  dismiss() {
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    document.getElementsByTagName('html')[0].removeAttribute('style');
  }


}
