import {
  Component,
  ComponentState,
  ReactElement,
  FunctionComponentElement,
  CElement,
  DOMAttributes,
  DOMElement,
} from 'react';

declare module 'react-snapshot' {
  export const render: SnapshotRenderer;

  export interface SnapshotRenderer {
    <T extends Element>(
      rootComponent: DOMElement<DOMAttributes<T>, T>,
      domElement: Element | null,
    ): void;

    (
      rootComponent:
        | DOMElement<DOMAttributes<any>, any>[]
        | FunctionComponentElement<any>
        | FunctionComponentElement<any>[]
        | CElement<any, Component<any, ComponentState>>[]
        | ReactElement<any>[],
      domElement: Element | null,
    ): void;

    <P, T extends Component<P, ComponentState>>(
      rootComponent: CElement<P, T>,
      domElement: Element | null,
    ): void;

    <P>(rootComponent: ReactElement<P>, domElement: Element | null): void;
  }
}
