import styled from 'styled-components';
import device from "../../Device";

const Image = styled.img`
height: 350px;

// @media (min-width: (${( device ) => device.tablet}) {
// height: 1800px;
// }

@media (${(device.tablet)}){
    height: 650px;
}
`

export default Image;