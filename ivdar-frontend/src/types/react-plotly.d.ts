declare module 'react-plotly.js' {
  import { Component } from 'react';
  import { Layout, Data, Config } from 'plotly.js';
  export interface PlotParams {
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    style?: React.CSSProperties;
    className?: string;
  }
  export default class extends Component<PlotParams> {}
} 