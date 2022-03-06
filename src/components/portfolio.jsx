import React from 'react';

//import stock

import regex1 from '../img/RegexSpaceship1.png';
import regex2 from '../img/RegexSpaceship2.png';
import regex3 from '../img/RegexSpaceship3.png';
import regex4 from '../img/RegexSpaceship4.png';
import regex5 from '../img/RegexSpaceship5.png';

import forest1 from '../img/Forestland1.png';
import forest2 from '../img/Forestland2.png';

import blog1 from '../img/blog1.png';
import blog2 from '../img/blog2.png';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here are some of my most notable projects from recent years!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={blog1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={blog1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row portfolio">
                      <div className="col-sm-8">
                        <h2 className="w-title">My Blog</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={blog2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={forest1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={forest1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row portfolio">
                      <div className="col-sm-8">
                        <h2 className="w-title">Forestland</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5 CSS3 Phaser3</span>{' '}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={forest2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={regex1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={regex1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row portfolio">
                      <div className="col-sm-8">
                        <h2 className="w-title">Regex Spaceship</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript React Express Sequelize Phaser3 Socket.io
                            HTML5
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={regex2}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={regex3}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={regex4}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={regex5}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
