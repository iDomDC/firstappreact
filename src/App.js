import Chat from './components/Chat';
import { useState } from 'react';
function App() {
    return (
    <div>
        <h1>IFAPME Chat</h1>
        <form>
            <label for="N">N : </label>
            <input type="text" name="N" id="N" placeholder="Ecrivez votre message"></input>
            <br></br>
            <label for="D">D : </label>
            <input type="text" name="D" id="D" placeholder="Ecrivez votre message"></input>
        </form>
    </div>
    );
}
export default App;