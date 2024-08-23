import Form from './Form/Form'
import Maisoku from './Maisoku/Maisoku'

function App() {

  return (
    <div className="l-All">
       <Form />
       <div id='pdf-dom'>
        <Maisoku />
       </div>
    </div>
  )
}

export default App
