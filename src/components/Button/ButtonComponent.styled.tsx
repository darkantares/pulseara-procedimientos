import styled from "@emotion/styled";
import { colors } from "../../constants/colors";


export const Button = styled.button(() => ({
    display: 'flex',
    height: '32px', // Establece la altura total
    padding: '8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Raleway',
    gap: '8px',
    flexShrink: 0,
    borderRadius: '5px',
    background: colors.blue,
    boxSizing: 'border-box' as const,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
}));

export const IconButton = styled.img(() => ({
    color: colors.white,
    textAlign: 'right' as const,
    fontFamily: '"SF Compact Display"',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    // textTransform: 'uppercase',
}));