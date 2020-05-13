import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers'; // root reducer 

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType, // node: jsx에 들어갈 수 있는 모든 것(all)을 지칭 (=렌더링 될 수 있는 애들)
    store: PropTypes.object,
};

/* 이 부분은 그냥 암기 ! */
export default withRedux((initialState, options) => {
    const store = createStore(reducer, initialState);   // store = reducer + state라고 생각
    return store;
})(NodeBird);