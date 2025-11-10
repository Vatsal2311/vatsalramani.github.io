import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, phone } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .phone-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 20px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm always excited to connect and explore new opportunities in Embedded Systems, Firmware
        Development, and Hw/Sw co-design. Whether you’re hiring, want to collaborate on a project,
        or just want to chat about low-level systems and real-time firmware — I’d love to hear from
        you!
      </p>
      <p>Feel free to contact me about any relevant job updates.</p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <p></p>
      <a className="phone-link" href={`tel:${phone}`}>
        Call Me
      </a>
    </StyledContactSection>
  );
};

export default Contact;
