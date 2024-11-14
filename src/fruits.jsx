import React from 'react'

//函數宣告
const Fruit = (props) => {   //Fruit 為component
    return <p> this is {props.fruit_name}.</p>   //<p>裡面的為element
}
// Fruit 是一個 React 元件（函數元件）
// 在 React 中，props 是一種用來讓元件之間進行資料溝通的方式，特別是從父元件向子元件傳遞資料。
// props 是一個物件
// {props.fruit_name} 是從 props 物件中取得的屬性，並顯示在 <p> 標籤中。

//類別宣告
// class Fruit extends React.Component {
//     render() {
//         return (
//             <P>this is {this.props.fruit_name}.</P>
//         );
//     }
// }

export default Fruit;