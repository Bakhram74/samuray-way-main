import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusPropsType = {
    updateStatus: (status: string) => void
    status: string
}


const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const deactivateEditMode = () => {

        setEditMode(false)

        if (status)
            props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || "_____"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status ? status : ""}/>
                </div>
            }
        </div>
    )
}

    export default ProfileStatusWithHooks;