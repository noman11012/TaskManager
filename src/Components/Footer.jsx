import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-10 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">

        {/* Logo + Text */}
        <div>
          <h2 className="text-white text-xl font-semibold">
            CS — Ticket System
          </h2>

          <p className="text-sm mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-title text-white">Company</h3>
          <a className="link link-hover block">About Us</a>
          <a className="link link-hover block">Our Mission</a>
          <a className="link link-hover block">Contact Sales</a>
        </div>

        {/* Services */}
        <div>
          <h3 className="footer-title text-white">Services</h3>
          <a className="link link-hover block">Products & Services</a>
          <a className="link link-hover block">Customer Stories</a>
          <a className="link link-hover block">Download Apps</a>
        </div>

        {/* Information */}
        <div>
          <h3 className="footer-title text-white">Information</h3>
          <a className="link link-hover block">Privacy Policy</a>
          <a className="link link-hover block">Terms & Conditions</a>
          <a className="link link-hover block">Join Us</a>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-title text-white">Social Links</h3>
          <p>X — @CS Ticket System</p>
          <p>LinkedIn — @CS Ticket System</p>
          <p>Facebook — @CS Ticket System</p>
          <p>Email — support@cst.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 pt-5">
        © 2025 CS — Ticket System. All rights reserved.
      </div>

    </footer>
  );
}