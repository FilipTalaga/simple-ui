import { Button } from './components';

console.log('hello');

type Numeric = {
  value: number;
};

const log = () => {
  const array = [1, 2, 3];
  const spread = [...array];

  console.log(spread);
};

log();

console.log(Button);
