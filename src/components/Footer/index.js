import React, { PureComponent } from 'react';

import FooterWrapper from './FooterWrapper';
class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <footer className="footer">
          <hr />
          <div className="footer__top">
            <div className="footer__source">
              The Geo Data Merger is a desktop <a target="_blank" href="https://github.com/funkeinteraktiv/geo-data-merger" rel="noopener noreferrer">open source tool</a> for merging data from csv, json, geo- and topojson files.<br />
            </div>
            <div className="footer__source">
              A project by <a target="_blank" href="https://twitter.com/funkeinteraktiv" rel="noopener noreferrer">Funke Interaktiv</a> and <a target="_blank" href="https://webkid.io/" rel="noopener noreferrer">webkid</a>. A slightly updated by <a target="_blank" href="https://www.dataviz.jp/" rel="noopener noreferrer">Dataviz.JP</a><br />
            </div>
            <div className="footer__source">
              Geo Data Merger, 18.12.2018<br />
              <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/imprint.html" target="_blank" rel="noopener noreferrer">Imprint</a> / <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/privacy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
            </div>
          </div>
          <div className="footer__bot">
          </div>
        </footer>
      </FooterWrapper>
    );
  }
}

export default Footer;
