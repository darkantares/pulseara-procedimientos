import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const ListWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row' as const,
    width: '80vw',
    maxWidth: '941px',
    height: '78px',
    flexShrink: 0,
    borderRadius: '10px',
    background: colors.white,
    marginTop: '33px',
    boxSizing: 'border-box'as const,
    alignItems: 'center',
    gap: '2vw', 
    padding: '16px 8vw 17px 4vw', 
    
   
    "@media (max-width: 768px)": {
      width: '75vw',
      height: 'auto',
      padding: '20px',
      flexDirection: 'column'as const,
      gap: '1vw',
    }
  }));
  
  export const ListItemWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column'as const,
    alignItems: 'flex-start',
    gap: '7px',
        
    "@media (max-width: 768px)": {
      flexDirection: 'row'as const, 
      gap: '1vw', 
    }
  }));

export const Wrapper = styled.div(() => ({
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-start'    
}));


export const ListTitle = styled(Typography)(() => ({
    color: colors.gray,
    textAlign: 'right' as const,
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    role: 'heading',
    ariaLevel: 2,
}));