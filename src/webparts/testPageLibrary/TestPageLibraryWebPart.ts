import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TestPageLibraryWebPartStrings';
import TestPageLibrary from './components/TestPageLibrary';
import { ITestPageLibraryProps } from './components/ITestPageLibraryProps';

export interface ITestPageLibraryWebPartProps {
  description: string;
}

export default class TestPageLibraryWebPart extends BaseClientSideWebPart<ITestPageLibraryWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ITestPageLibraryProps> = React.createElement(
      TestPageLibrary,
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
