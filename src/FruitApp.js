//表示從React庫引入了react物件和Component類別，可使用Component來建立類別型元件，不用每次都寫React.Componemt
import React, {Component} from 'react';  
import Fruit from './fruits.jsx';
//把函數宣告寫在.jsx 再 import

const melon = <Fruit fruit_name="a melon"/>  //melon 為元件的實例 component instance

// const [fruit, setFruit] = useState('banana');  //陣列解構賦值 fruit是狀態值 setFruit狀態更新函數，用來更新fruit的值

class FruitApp extends Component {
    render() {
      return (
        <div className="FruitApp">
          <ul>
            {melon}
            <Fruit fruit_name="a banana" />
            <Fruit fruit_name="an apple" />
          </ul>
        </div>
      );
    }
  }


  export default FruitApp;
