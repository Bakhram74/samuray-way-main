import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    updateStatus: (status: string) => void
    status: string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        status: this.props.status,
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if (this.state.status)
            this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status:this.props.status
            })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "_____"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status ? this.state.status : ""}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;