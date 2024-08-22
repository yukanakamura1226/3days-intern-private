import Left_1 from "./Left_1"
import Left_2 from "./Left_2"
import Left_3 from "./Left_3"

function Left() {

    return (
      <div className="l-left" style={{height:"100%",width:"50%",float:"left"}}>
         <Left_1/>
         <Left_2/>
         <Left_3/>
      </div>
    )
  }

  export default Left