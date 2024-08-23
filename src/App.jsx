import Form from './Form/Form'
import Maisoku from './Maisoku/Maisoku'
import './App.css'

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
