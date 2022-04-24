import { Button } from './components';

console.log('hello');

type Numeric = {
  value: number;
};

const log = () => {
  const array: Numeric[] = [{ value: 1 }, { value: 2 }, { value: 3 }];
  const spread = [...array];

  console.log(spread);
};

log();

console.log(Button);
