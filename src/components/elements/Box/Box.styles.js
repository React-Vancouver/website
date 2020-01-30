import { cssSwitch } from '@utilities/styles';
import S from '@symbols';

const container = {
    maxWidth: S.LAYOUT_CONTAINER,
    margin: '0 auto',
};

export const constructStyles = (props) => [
    cssSwitch({ props, prop: 'container', css: container }),
];
