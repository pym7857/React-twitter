import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
    position: fixed; 
    zIndex: 5000; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`;
export const Header = styled.header`
    height: 44px; 
    background: white; 
    position: relative; 
    padding: 0; 
    textAlign: center;

    & h1 {
        margin: 0;
        fontSize: 17px;
        color: #333; 
        lineHeight: 44px;  
    }
`;
export const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: #090909;
`;
export const CloseBtn = styled(CloseOutlined)`
    position: absolute; 
    right: 0; 
    top: 0;
    padding: 15px;
    lineHeight: 14px; 
    cursor: pointer;  
`;
export const Indicator = styled.div`
    text-align: center;

    & > div {
        width: 75px; 
        height: 30px; 
        lineHeight: 30px; 
        borderRadius: 15px; 
        background: #313131; 
        display: inline-block; 
        textAlign: center; 
        color: white; 
        fontSize: 15px;
    }
`;
export const ImgWrapper = styled.div`
    padding: 32px; 
    textAlign: center;

    & img {
        margin: 0 auto;
        maxHeight: 750px;
    }
`;