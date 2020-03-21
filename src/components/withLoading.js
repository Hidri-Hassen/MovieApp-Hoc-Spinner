import React, { Component } from "react";
import Spinner from './spinner'

const withLoading = (WrappedComponent) => {
    return class LoaderHoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isloading: true,
            }
        }

        isLoading = () => {
            setTimeout(() => {
                this.setState({
                    isloading: false
                })
            }, 5000)
        }

        componentDidMount() {
            this.isLoading();
        }
        render() {
            return (
                this.state.isloading === true ? <Spinner /> : <WrappedComponent {...this.props}/> )
        }
    }
}
export default withLoading; 