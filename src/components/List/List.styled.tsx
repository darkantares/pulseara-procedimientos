import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const ListWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row' as const,
    width: '941px',
    height: '78px',
    flexShrink: 0,
    borderRadius: '10px',
    background: '#FFF',
    marginTop: '33px'
}));

export const Wrapper = styled.div(() => ({    
    marginTop: '33px',   
}));

export const List = styled.div(() => ({
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '78px',
    padding: '16px 82px 17px 34px'
}));

export const ListItemWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '7px',
}));

export const ListTitle = styled(Typography)(() => ({
    color: colors.gray,
    textAlign: 'right' as const,
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'    
}));