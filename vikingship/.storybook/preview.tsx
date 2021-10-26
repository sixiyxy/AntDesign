// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { addDecorator } from '@storybook/react';
import React from 'react';
import '../src/styles/index.scss'
import { withInfo } from '@storybook/addon-info'
import { addParameters } from '@storybook/client-api';

const styles: React.CSSProperties = {
    textAlign: 'center',
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const wrapperStyle: React.CSSProperties = {
    padding : '20px 40px'
}

const storyWrapper = (storyFn: any) => (
    <div style={wrapperStyle}>
        <h3>组件演示</h3>
        {storyFn()}
    </div>
)

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false}})