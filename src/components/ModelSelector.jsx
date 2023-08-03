import React from 'react'
import { Model1 } from '../paintings/Model1'
import { Model2 } from '../paintings/Model2'
import { Model4 } from '../paintings/Model4'
import { Model5 } from '../paintings/Model5'
import { Model6 } from '../paintings/Model6'
import { Model7 } from '../paintings/Model7'
import { Model8 } from '../paintings/Model8'
import { Model9 } from '../paintings/Model9'
import { Model10 } from '../paintings/Model10'
import { Model3 } from '../paintings/Model3'
 
const ModelSelector = ({modelIndex}) => {
    const modelArray = [<Model1/>,<Model2/>,<Model3/>,<Model4/>,<Model5/>,<Model6/>,<Model7/>,<Model8/>,<Model9/>,<Model10/>]
  return (<>
     {modelArray[modelIndex]}
    </>
  )
}

export default ModelSelector
