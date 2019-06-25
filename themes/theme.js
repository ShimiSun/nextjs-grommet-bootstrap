import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";


const theme = deepMerge(grommet, {
  global: {
    colors:{
      brand:'#558b2f',
      'accent-1':'#FFD700',
      'brand-mobi':"#e5eec3",
      placeholder:'#FFD700'
    },
    drop: {
      background: "#FFD700",
      shadowSize: "medium",
      extend: `
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
  
          overflow: hidden;
        `
    },
    elevation: {
      dark: {
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
      },
      light: {
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
      }
    },
    input: {
      weight: 400
    },
    font: {
      family: 'Roboto',// 'Roboto',
      size:'1em', // '14px',
      height:'4rem', // '20px',
      style:'normal',
    },
    button:{
      border:{
        color:'#558b2f'
        
      }
    },
focus:{
  border:{
    color:'#558b2f'
  }
},
size:{
  "sidebar":"550px"
}
  },
  text:{
    medium:{
      size:'14px'
    }
  }
});

export default theme;

