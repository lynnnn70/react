import React from 'react'

//函數宣告
const Fruit = (props) => {   //Fruit 為component
    return <p> this is {props.fruit_name}.</p>   //<p>裡面的為element
}

//類別宣告
// class Fruit extends React.Component {
//     render() {
//         return (
//             <P>this is {this.props.fruit_name}.</P>
//         );
//     }
// }

export default Fruit;