import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const ListWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    width: '90vw',
    maxWidth: '941px',
    height: '78px',
    flexShrink: 0,
    borderRadius: '10px',
    background: colors.white,
    marginTop: '33px',
    boxSizing: 'border-box' as const,
    "@media (max-width: 768px)": {
        width: '100%',
        height: 'auto',
        padding: '20px',
    }
}));

export const List = styled.div(() => ({
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '2vw', 
    padding: '16px 8vw 17px 4vw', 
}));

export const Wrapper = styled.div(() => ({
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-start'    
}));

export const ListItemWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '7px',
    // width: '100%', // Cambia el ancho para ser flexible
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