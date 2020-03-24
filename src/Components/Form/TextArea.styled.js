import styled from 'styled-components';

const StyledTextArea = styled.textarea`
width: 100%;
border-radius: 3px;
height: 7rem;
padding: 0.25em 1em;
margin-bottom: 10px;
background: transparent;
color: ${({theme}) => theme.primaryLight};
resize: none;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

&:focus {
    box-shadow: 0 0 0 2pt ${({theme}) => theme.primaryFocus};
}
`
// Outline property to highlight

// const TextArea = forwardRef(({ onChange, ...props }, ref) => {
//     const handleChange = event => onChange && onChange(event.target.value);
//     return <StyledTextArea onChange={handleChange} ref={ref} {...props} />;
//   });
  
export default StyledTextArea;