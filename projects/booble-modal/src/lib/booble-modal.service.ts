import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoobleModalService {

  componentRef: ComponentRef<any>;
  private value: BehaviorSubject<any> = new BehaviorSubject(null);
  isDismissed = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  present(component: any, data?: any) {
    if (this.componentRef) {
      this.dismiss(null);
    }

    this.isDismissed = false;

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
      dismiss: this.dismiss,
      onDidDismiss: this.onDidDismiss,
      isDismissed: this.isDismissed
    };
  }

  private get onDidDismiss() {
    return this.value.asObservable();
  }

  dismiss(data: any) {
    this.isDismissed = true;
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    document.getElementsByTagName('html')[0].removeAttribute('style');
    this.value.next(data);
  }


}
