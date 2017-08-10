import './app.css';


const a = () => {
  console.info('ddd');
};
a();
const test = () => {
  console.log(process.env.NODE_ENV === 'production', 'ddd');
};
test();
