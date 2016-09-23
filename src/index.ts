import { NgModule } from '@angular/core';

// import components / directives for the module
import { TableDirective } from './Table/Table.directive';
import { PipeComponent } from './Pipe/Pipe.component';
import { SortDirective } from './Sort/Sort.directive';

// export for any consumers of module
export { SortOrder } from './Sort/SortOrder.enum';
export { TableDirective } from './Table/Table.directive';
export { SortDirective } from './Sort/Sort.directive';
export { PipeComponent } from './Pipe/Pipe.component';
export { ITableState } from './TableState/ITableState.interface';
export { PropertyValueSelectorEvent } from './Sort/PropertyValueSelectorEvent.class';
export { DefaultTableState, DefaultTableStatePagination, DefaultTableStateSearch, DefaultTableStateSort } from './TableState/DefaultTableState.class';

var declarations =[
        TableDirective,
        SortDirective,
        PipeComponent
    ]; 

@NgModule({
    exports:declarations,
    declarations: declarations 
})
export class PowerTableModule {

}
