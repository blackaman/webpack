import './app.css';
import iconPlay from './asset/images/icon_play.png';
import iconPlaying from './asset/images/paying.gif';
import iconQrcod from './asset/images/qrcode.jpg';


const test = () => {
  let img = document.createElement('img');
  img.src = iconQrcod;
  document.body.appendChild(img);
  console.log(process.env.NODE_ENV === 'production', 'ddd');
  const a = [1,2,3];
  consdole.log([...a,4]);
};
test();
