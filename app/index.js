import './app.css';

const test = () => {
  console.log(process.env.NODE_ENV === 'production', 'ddd');
};
test();
