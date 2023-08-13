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
import { Model11 } from '../paintings/Model11'
import { Model12 } from '../paintings/Model12'
import { Model13 } from '../paintings/Model13'
import { Model14 } from '../paintings/Model14'
import { Model15 } from '../paintings/Model15'
import { Model16 } from '../paintings/Model16'
import { Model17 } from '../paintings/Model17'
import { Model18 } from '../paintings/Model18'
import { Model19 } from '../paintings/Model19'
import { Model20 } from '../paintings/Model20'
import { Model21 } from '../paintings/Model21'
import { Model22} from '../paintings/Model22'
import { Model23} from '../paintings/Model23'
import { Model24} from '../paintings/Model24'
import { Model25} from '../paintings/Model25'
import { Model26} from '../paintings/Model26'
const ModelSelector = ({modelIndex}) => {
    const modelArray = [
    <Model1/>,<Model2/>,<Model3/>,<Model4/>,<Model5/>,<Model6/>,<Model7/>,<Model8/>,<Model9/>,<Model10/>,
    <Model11/>,<Model12/>,<Model13/>,<Model14/>,<Model15/>,<Model16/>,<Model17/>,<Model18/>,<Model19/>,<Model20/>,<Model21/>,<Model22/>,<Model23/>,<Model24/>,<Model25/>,<Model26/>]
  
  
  return (<>
     {modelArray[modelIndex]}
    </>
  )
}

export default ModelSelector
