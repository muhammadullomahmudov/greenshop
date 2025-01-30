import React from 'react'
import './FooterTopMain.css'
import logo from '../../assets/greenshop.svg'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const FooterTopMain = () => {
  return (
    <div className="footer-box">
      <img src={logo} alt="Green Shop Logo" className="top-logo" />

      <div className="box">
        <FaMapMarkerAlt />
        <p className="footer-address">
          70 West Buckingham Ave. <br />
          Farmingdale, NY 11735
        </p>
      </div>

      <div className="box">
        <MdEmail />
        <p className="footer-address">
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </p>
      </div>

      <div className="box">
        <FaPhoneAlt />
        <p className="footer-phone">+88 01911 717 490</p>
      </div>
    </div>
  )
}

export default FooterTopMain
