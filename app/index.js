import './app.css';

const test = () => {
  console.log(!process.argv.includes('--env'), 'ddd');
};
test();
