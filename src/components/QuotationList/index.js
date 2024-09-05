import {ScrollView} from "react-native"
import { Fragment } from "react"
import Buttons from "../Buttons"

export default function QuotationList() {
   return(
        //A principal função do Fragment é agrupar múltiplos elementos sem adicionar um nó extra na árvore de componentes
        <Fragment>
           <Buttons/>
           <ScrollView></ScrollView>
        </Fragment>
        
   )
}