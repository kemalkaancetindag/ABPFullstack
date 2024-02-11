import React from 'react'
import Input from '../../reusable/input/Input'
import './department-data-modal.css'
import Button from '../../reusable/button/Button'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators, departmentActionCreators } from '../../../state/action-creators'
import { useMutation } from 'react-query'
import { DepartmentService } from '../../../api/service'
import { DepartmentCreate, DepartmentUpdate } from '../../../api/model'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { DepartmentDataModalModeEnum } from '../../../enums'
import { AlertService } from '../../../utils'

export default function DepartmentDataModal() {

  const dispatch = useDispatch()
  const {setCreateDepartmentName} = bindActionCreators(departmentActionCreators, dispatch)
  const {setRefetchDepartment, setIsWorking} = bindActionCreators(appActionCreators, dispatch) 
  const departmentsState = useSelector((state: State) => state.department)
  const appState = useSelector((state: State) => state.app)
  
  const createMutation = useMutation((data: DepartmentCreate) =>
    DepartmentService.create(data)
  );

  const updateMutation = useMutation((data: DepartmentUpdate) =>
  DepartmentService.update(departmentsState.id,data)
);


  return (
   <div id='department-modal-inner'>

    <Input
        placeholder='Department Name'
        label='Name'
        type='text'
        callBack={setCreateDepartmentName}
        value={departmentsState.name}   
        disabled={appState.departmentDataModalMode === DepartmentDataModalModeEnum.INFO}   
    />
    {
      appState.departmentDataModalMode === DepartmentDataModalModeEnum.INFO
      ? null
      :  <Button    
          text='Save'
          callBack={async () => {
            if(departmentsState.name.length === 0) {
              AlertService.alert("Name can not be empty!")
              return
            }
            setIsWorking(true)
            switch(appState.departmentDataModalMode) {
              case DepartmentDataModalModeEnum.CREATE:
                await createMutation.mutateAsync({name: departmentsState.name})
                setRefetchDepartment(true)
                break;
              case DepartmentDataModalModeEnum.EDIT:
                await updateMutation.mutateAsync({name: departmentsState.name})
                setRefetchDepartment(true)
                break
            }
          }}
      />
    }
   
   </div>
  )
}
