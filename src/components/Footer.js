import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <p className="footer-copyright">
        Copyright &copy; Tyler Yip, Radu Schirliu, &amp; Alexa Calkhoven{" "}
        {new Date().getFullYear()}. All rights reserved.
      </p>
      <p className="footer-disclaimer">
        FAIR USE NOTICE: This web application contains copyrighted material, the
        use of which has not always been explicitly authorized by the copyright
        owner. We are making such material available in our efforts to advance
        understanding of the civil rights movement across the globe. We believe
        this constitutes fair use of any such copyrighted material as provided
        for in section 107 of the US Copyright Law. In accordance with Title 17
        U.S.C. Section 107, the material on this site is distributed without
        profit to those who have expressed prior interest in receiving the
        included information for research and educational purposes. If you wish
        to use copyrighted material from this site for purposes of your own that
        go beyond fair use, you must obtain permission from the copyright owner
      </p>
    </div>
  );
}

export default Footer;
