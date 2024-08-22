import Top from './Top.jsx'
import Under from './Under.jsx';
function Maisoku() {

    return (
      <div className="l-Maisoku" style={{border: "solid 1px"}}>

        <div className='top' style={{height: "90%"}}>
          <Top />
        </div>
        <div className='top' style={{height: "10%"}}>
          <Under />
        </div>
    </div>
    )
  }
  
  export default Maisoku;
  