import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const DialogWrapperComponent = styled.div(() => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.30)',
  zIndex: 1000,
}));

export const DialogStyledComponent = styled.div(() => ({
  width: '1041px',
  maxWidth: '80Vw',
  height: '456px',
  flexShrink: 0,
  borderRadius: '8px',
  background: colors.white,
  margin: 'auto',
  transform: 'translateY(50%)',
  paddingLeft: '57.82px'
}));

export const DialogTitleWrapper = styled.div(() => ({
  paddingTop: '43.8px',
  display: 'flex',
  alignItems: 'center',
  width: '559px',
  height: '45px',
  flexShrink: 0,
  gap: '20px',
  marginLeft: '40px'
}));

export const DialogTitle = styled.div(() => ({
  color: colors.darkBlue,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Raleway',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '140%',
}));

export const DialogSubTitle = styled.div(() => ({
  color: colors.green,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%',
  marginTop: '12px',
  cursor: 'pointer'
}));

export const DialogBody = styled.div(() => ({
  marginTop: '40px',
  width: '880px'
}));


export const StyledDiv = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  width: '145px'
}));

export const StyledDivWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'center',
  gap: '25px'
}));