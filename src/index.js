import { React } from 'react';
import { injectGlobal } from 'styled-components';

import { Grid, Row, Column } from './Grid';
import { Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend } from './Forms';
import { Anchor, H1, H2, H3, H4, H5, H6, Strong } from './Typography';
import { Ruler } from './Ruler';
import { ListItem, OrderedList, UnOrderedList } from './Lists';
import { Table, Th, Td } from './Tables';
import { Button, Submit } from './Buttons';
import { Code, HtmlTag, SmallText, Tag } from './Helpers';

injectGlobal`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.4em; /* currently ems cause chrome bug misinterpreting rems on body element */
    line-height: 1.6;
    font-weight: 400;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #222;
  }

  p {
    margin-top: 0;
  }

  /* raleway-100 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 100;
    src: url('fonts/raleway-v12-latin-100.eot'); /* IE9 Compat Modes */
    src: local('Raleway Thin'), local('Raleway-Thin'),
        url('fonts/raleway-v12-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-100.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-100.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-100italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 100;
    src: url('fonts/raleway-v12-latin-100italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Thin Italic'), local('Raleway-ThinItalic'),
        url('fonts/raleway-v12-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-100italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-100italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-200 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 200;
    src: url('fonts/raleway-v12-latin-200.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
        url('fonts/raleway-v12-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-200.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-200.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-200italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 200;
    src: url('fonts/raleway-v12-latin-200italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraLight Italic'), local('Raleway-ExtraLightItalic'),
        url('fonts/raleway-v12-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-200italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-200italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-300 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    src: url('fonts/raleway-v12-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Raleway Light'), local('Raleway-Light'),
        url('fonts/raleway-v12-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-300.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-300.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-300italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 300;
    src: url('fonts/raleway-v12-latin-300italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Light Italic'), local('Raleway-LightItalic'),
        url('fonts/raleway-v12-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-300italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-300italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/raleway-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
        url('fonts/raleway-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    src: url('fonts/raleway-v12-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Italic'), local('Raleway-Italic'),
        url('fonts/raleway-v12-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-500 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src: url('fonts/raleway-v12-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Raleway Medium'), local('Raleway-Medium'),
        url('fonts/raleway-v12-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-500.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-500.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-500italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 500;
    src: url('fonts/raleway-v12-latin-500italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Medium Italic'), local('Raleway-MediumItalic'),
        url('fonts/raleway-v12-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-500italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-500italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-600 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: url('fonts/raleway-v12-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('fonts/raleway-v12-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-600.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-600.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-600italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 600;
    src: url('fonts/raleway-v12-latin-600italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'),
        url('fonts/raleway-v12-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-600italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-600italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-700 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/raleway-v12-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Raleway Bold'), local('Raleway-Bold'),
        url('fonts/raleway-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-700.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-700.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-700italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 700;
    src: url('fonts/raleway-v12-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'),
        url('fonts/raleway-v12-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-700italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-800 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    src: url('fonts/raleway-v12-latin-800.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
        url('fonts/raleway-v12-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-800.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-800.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-800italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 800;
    src: url('fonts/raleway-v12-latin-800italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
        url('fonts/raleway-v12-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-800italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-800italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-900 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    src: url('fonts/raleway-v12-latin-900.eot'); /* IE9 Compat Modes */
    src: local('Raleway Black'), local('Raleway-Black'),
        url('fonts/raleway-v12-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-900.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-900.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-900italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 900;
    src: url('fonts/raleway-v12-latin-900italic.eot'); /* IE9 Compat Modes */
    src: local('Raleway Black Italic'), local('Raleway-BlackItalic'),
        url('fonts/raleway-v12-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/raleway-v12-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/raleway-v12-latin-900italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/raleway-v12-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/raleway-v12-latin-900italic.svg#Raleway') format('svg'); /* Legacy iOS */
  }  
`;

export {
  /* Grid components */
  Grid, Row, Column,
  
  /* Form components */
  Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend,

  /* Typography components */
  Anchor, H1, H2, H3, H4, H5, H6, Strong,

  /* Ruler component */
  Ruler,

  /* List components */
  ListItem, OrderedList, UnOrderedList,

  /* Table components */
  Table, Th, Td,

  /* Button components */
  Button, Submit,

  /* Helper components */
  Code, HtmlTag, SmallText, Tag
};