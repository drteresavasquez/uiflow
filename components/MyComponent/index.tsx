import * as React from 'react';
import { PropType, registerComponent } from '@uiflow/cli';

export type Props = React.HTMLProps<HTMLButtonElement> & {
  label: string;
};

const SimpleButton: React.FC<Props> = ({ className, onClick, label }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default registerComponent('my-ui-component', {
  component: SimpleButton,
  name: 'Simple Button',
  props: [
    {
      name: 'label',
      type: PropType.String,
      value: 'My Label',
    },
    {
      name: 'onClick',
      type: PropType.Event,
    },
  ],
});
