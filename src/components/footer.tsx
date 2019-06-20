import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/root';
import { toggleCopyright } from '../actions/footerActions';


type statePropsType = ReturnType<typeof mapStateToProps>;
type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;
export type footerTypes = statePropsType & dispatchPropsType;

export class FooterC extends React.Component<footerTypes> {
    componentDidMount() {

    }

    render() {
        return (
            <>
                <div>{this.props.showCopyright ? 'Hi' : 'Helo'}</div>
                <div onClick={this.props.toggleCopyright}>'Click me to change footer'</div>
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        showCopyright: state.footer.showCopyright
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleCopyright: () => {
            dispatch(toggleCopyright());
        }
    }
}

export const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterC);
