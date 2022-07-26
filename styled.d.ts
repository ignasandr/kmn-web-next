// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string;
      orange: string;
    };

    fonts: {
      base: string;
      title: string;
    }
  }
}