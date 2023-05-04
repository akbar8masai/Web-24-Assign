import React from 'react'

// for class based component {component} ,in react import

import loading from './loading.gif'

// export default class spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img className='my-3' src={loading} alt="loading" />
//       </div>
//     )
//   }
// }

// -------------------------------------------
const spinner=()=>{
  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" />
    </div>
  )
}
export default spinner