import gnbBackground from 'assets/gnb-bg-l.svg';
import './GnbBackground.css';

function GnbBackground() {
  return(
    <>
      <img className ="GnbBackground" src={gnbBackground} alt="이미지 로딩 에러"/>
    </>
  )
}

export default GnbBackground;