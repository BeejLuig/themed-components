import { storiesOf } from '@storybook/html';
import '../../dist/uk/Button';

storiesOf('Button', module)
  .add('default', () => '<my-button>UK Button</my-button>')
