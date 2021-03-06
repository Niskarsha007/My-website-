import React from 'react';

import DevIcon from "devicon-react-svg";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const theme = {
  phpColor: {
    style: {
      background: '#6181b6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--php',
    icon: <DevIcon icon="aws" style={{fill:"#fff"}} />,
},
  angularColor:{
    style: {
      background: '#BD002E',
      color: '#fff',
    },
    className: 'vertical-timeline-element--angular',
    icon: <DevIcon icon="kubernetes" style={{fill:"#fff"}} />,
  },
  reactColor: {
    style: {
      background: '#61DAFB',
      color: '#fff',
    },
    className: 'vertical-timeline-element--react',
    icon: <DevIcon icon="jenkins" style={{fill:"#fff"}} />,
  },
  javascriptColor: {
    style: {
      background: '#F0DB4F',
      color: '#fff',
    },
    className: 'vertical-timeline-element--javascript',
    icon: <DevIcon icon="Jenkins" style={{fill:"#fff"}} />,
  },
    html5Color: {
    style: {
      background: '#dd400f',
      color: '#fff',
    },
    className: 'vertical-timeline-element--html5',
    icon: <DevIcon icon="html5" fill='#FFF' />,
  },
  pythonColor: {
    style: {
      background: '#306998',
      color: '#fff',
    },
    className: 'vertical-timeline-element--python',
    icon: <DevIcon icon="Kubernetes" fill='#FFD43B' />,
  },
  cssColor: {
    style: {
      background: '#146EB0',
      color: '#fff',
    },
    className: 'vertical-timeline-element--css',
    icon: <DevIcon icon="css3" fill='#FFF' />,
  },
  redhatColor: {
    style: {
      background: 'black',
      color: 'red',
    },
    className: 'vertical-timeline-element--redhat',
    icon: <DevIcon icon="Aws" fill='red' />,
  },
  othersColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
  },
};

export default theme;
