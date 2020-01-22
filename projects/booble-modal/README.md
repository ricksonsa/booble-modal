## Install

`npm install --save booble-modal`

## Usage

At app.module

```typescript

 import { BoobleModalModule } from 'booble-modal';

@NgModule({
   declarations: [
      AppComponent,
      TesteComponent
   ],
   entryComponents: [
      TestComponent // Add your custom modal component here
   ],
   imports: [
      BrowserModule,
      BoobleModalModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
```

Then at component

```typescript
    import { BoobleModal } from 'booble-modal';


    constructor(private modalService: BoobleModal) {

    }

    ngOnInit(): void {
        this.modalService.open(TestComponent);
        this.modalService.close();

    }
```
