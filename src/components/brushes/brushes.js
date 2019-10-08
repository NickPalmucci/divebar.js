import React from 'react';

export default class extends React.Component {

    appendControlsToNewParent = (node, parentId) => {
        const newParent = window.document.getElementById(parentId);
        newParent.appendChild(node)
    };

    componentDidMount = () => {
        const controls = this.props.controlsNode;

        this.appendControlsToNewParent(controls, 'brushes-cont')
    };

    render () {
        return (
            <div id="brushes-cont">
            </div>
        )
    }

}