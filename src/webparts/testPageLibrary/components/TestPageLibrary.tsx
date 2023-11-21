import * as React from 'react';
import { ITestPageLibraryProps } from './ITestPageLibraryProps';
import { ITestService } from './ITestService';
import { TestService } from './TestService';

export default class TestPageLibrary extends React.Component<ITestPageLibraryProps, {}> {
  private _service: ITestService;
  
  componentDidMount(): void {
    this._service = this.props.context.serviceScope.consume(TestService.servicekey)
    this._service.getPages().then(data=>{
      console.log('Pages',data);
    })
  }
  public render(): React.ReactElement<ITestPageLibraryProps> {
    return (
     <div>Test</div>
    );
  }
}
