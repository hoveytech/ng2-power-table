[![Build Status](https://dev.azure.com/hoveytech/ngx-power-table/_apis/build/status/hoveytechllc.ngx-power-table?branchName=master)](https://dev.azure.com/hoveytech/ngx-power-table/_build/latest?definitionId=21&branchName=master)

> NOTE: Documentation below is for version 0.5.0 which is under development. See branch `release/v0.4.x` for previous documentation

# ng-power-table

NgxPowerTable is table module for Angular. It is designed to be modular and easily customizable. Other table modules require Controllers to provide information for which columns are visible and even providing their respective templates. I believe the view, and the view only, should be responsible for how the table is rendered.

If you've used [Smart Table](https://github.com/lorenzofox3/Smart-Table) for Angular 1.x, you'll find some similarities to Ng2PowerTable.

Documentation: [http://ngx-power-table.hoveytech.com](http://ngx-power-table.hoveytech.com)

# Installation

## 1. Install ng-power-table

using Node Package Manager:

`npm install @hoveytech/ngx-power-table`

## 2. Import module

```typescript
import { NgModule } from '@angular/core';
import { PowerTableModule } from '@hoveytech/ngx-power-table';

@NgModule({
	imports: [
        ...,
		PowerTableModule,
	]
})
export class AppModule{

}
```

# Usage

### 1. Add `ptTable` attribute to any element using for table, i.e. `<table [ptTable]="allCustomers">...`

`ptTable` is 'parent' directive and is required by other directives/components. Include one-way binding for `ptTable` which should be the original array of items for table (i.e. un-sorted, un-paged).

### 2. Add `ptDisplayArray` attribute on same element as `ptTable` with two-way binding.

`ptDisplayArray` is the resulting array after Ng2PowerTable has processed the original array of items. For example on a table `...<table [ptTable]="allCustomers" [(ptDisplayArray)]="displayCustomers">...`

Now you can use `*ngFor` over a `tr` element (or whatever you want) and repeat over the resulting `displayCustomers` of example.

Internally Ng2PowerTable uses a service `DefaultDataPipeService` that does client-side paging and sorting. The output of this service is set to your binding of `ptDisplayArray`. FYI: A different `IDataPipeService` could be configured that does server-side paging/sorting/filtering.

### 3. Add any sorting to header elements.

Use `ptSort` attribute with value set to property name for sorting. For example on a table header `...<th ptSort="name">Name</th>...`.

### 4. Add pagination 

Add element `<pt-pagination></pt-pagination>` somewhere within `ptTable` element. This component renders navigation buttons to move thru pages of resulting data.

Example template:

```javascript
<table [ptTable]="allCustomers" [(ptDisplayArray)]="displayCustomers">
    <thead>
        <tr>
            <th ptSort="id">Id<th>
            <th ptSort="name">Name<th>
            <th>Open Invoices<th>
        </tr>
    </thead>
    <tbody>
        <tr ngFor="#c of displayCustomers">
            <td>{{c.id}}</td>
            <td>{{c.name}}</td>
            <td>{{c.invoices}}</td>
        </tr>
    </tbody>
    <tfoot>
        <pt-pagination></pt-pagination>
    </tfoot>
</table>
```

## Testing

Run `npm install` then `npm run test`

Collaborators welcome.

## License

Power Table module is under MIT license:

> Copyright (C) 2021 Hovey Tech LLC.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
