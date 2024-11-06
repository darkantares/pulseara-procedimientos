import styled from "@emotion/styled";

export const InputText = styled.input(() => ({
    width: '145px',
    height: '44px',
    flexShrink: 0,
    borderRadius: '5px',
    border: '2px solid #9CBEB3',
    background: '#F6F6FB',
    paddingLeft: '8px',
    fontSize: '16px',
    outline: 'none',
    color: '#333',
  
    '&::placeholder': {
      color: '#9CBEB3',
    },
  
    '&:focus': {
      borderColor: '#3F48AD',
    },
}));