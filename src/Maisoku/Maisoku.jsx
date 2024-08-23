import Top from './Top.jsx'
import Under from './Under.jsx';
import './Maisoku.css'

function Maisoku() {

    return (
      <div className="l-Maisoku" style={{border: "solid 1px",height: "860px"}}>

        <div className='top' style={{height: "90%"}}>
          <Top />
        </div>
        <div className='under' style={{height: "10%"}}>
          <Under />
        </div>
    </div>
    )
  }
  
  export default Maisoku;
  