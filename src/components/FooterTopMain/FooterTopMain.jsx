import React from 'react'
import './FooterTopMain.css'
import logo from '../../assets/greenshop.svg'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const FooterTopMain = () => {
  return (
    <div className="footer-box">
    <img src={logo} alt="" className="top-logo" />
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
<p>contact@greenshop.com</p>

    </p>
</div>
<div className="box">
<FaPhoneAlt />
<p>+88 01911 717 490</p>
</div>
  </div>
  )
}

export default FooterTopMain