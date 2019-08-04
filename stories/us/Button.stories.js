import { storiesOf } from '@storybook/html';
import '../../dist/us/Button';

storiesOf('Button', module)
  .add('default', () => '<my-button>US Button</my-button>')