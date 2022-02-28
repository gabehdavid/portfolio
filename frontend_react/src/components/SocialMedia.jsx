import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href='https://www.linkedin.com/in/gabril-david-716249226/' target="_blank" rel="noreferrer">
        <div>
          <FaLinkedinIn />
        </div>
      </a>
      <a href='https://mobile.twitter.com/gabrilakahabibi' target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href='https://www.instagram.com/gabril.211/' target="_blank" rel="noreferrer">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;