declare module '*.module.scss' {
  export interface CSSModuleStyles {
    [className in string]: string;
  }

  const styles: any;

  export default styles;
}
