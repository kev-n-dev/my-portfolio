import React from 'react';
import styled from 'styled-components';

interface ProfilePhotoProps {
  src: string;
  alt: string;
  size?: number; // Optional size prop to control the size of the image
}

const RoundedImage = styled.img<{ size?: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : '100px')};
  height: ${(props) => (props.size ? `${props.size}px` : '100px')};
  border-radius: 50%;
  object-fit: cover;
border: 5px solid #7F7F7F ; 
`;

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, alt, size }) => {
  return <RoundedImage src={src} alt={alt} size={size} />;
};

export default ProfilePhoto;
