import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card)`
  box-shadow: 1px 1px 30px #252525;
  border: none;
  border-radius: 10px;
  & .ant-card-head {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    text-align: center;
    border: none;
    background-image: linear-gradient(to top, #146b86, #17728d);
    color: #dedee2;
    font-size: 2em;
  }
  & input {
    color: #597ef7;
    border-radius: 10px;
  }
  & textarea {
    color: #597ef7;
    border-radius: 10px;
  }
`;

export default StyledCard;
