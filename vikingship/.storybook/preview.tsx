// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import { addDecorator } from '@storybook/react';
import React from 'react';
import '../src/styles/index.scss'

const styles: React.CSSProperties = {
    textAlign: 'center',
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)