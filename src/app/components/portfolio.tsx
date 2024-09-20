import React from 'react'
import Image from 'next/image'

export default function Portfolio() {
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
              <a href='/public/img/Wanderlist1.png' data-lightbox="gallery-potato">
                <div className="work-img">
                  <Image src="/public/img/Wanderlist1.png" alt="" className="img-fluid" height={100} width={100} />
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Wanderlist</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          JavaScript ReactJS Express MongoDB JWT
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
                href='/public/img/Wanderlist2.png'
                data-lightbox="gallery-potato"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href='/public/img/Wanderlist3.png'
                data-lightbox="gallery-potato"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href='/public/img/RegexSpaceship1.png' data-lightbox="gallery-todo">
                <div className="work-img">
                  <img src='/public/img/RegexSpaceship1.png' alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Regex Spaceship</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          JavaScript ReactJS Express Sequelize Phaser3 Socket.io
                          HTML5
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
                href='/public/img/RegexSpaceship2.png'
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href='/public/img/RegexSpaceship3.png'
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href='/public/img/RegexSpaceship4.png'
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href='/public/img/RegexSpaceship5.png'
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href='/public/img/blog1.png' data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img src='/public/img/blog1.png' alt="" className="img-fluid" />
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
                href='/public/img/blog1.png'
                data-lightbox="gallery-vmarine"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href='/public/img/Forestland1.png' data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src='/public/img/Forestland1.png' alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Forestland</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5 CSS3 Phaser3</span>
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
                href='/public/img/Forestland2.png'
                data-lightbox="gallery-aguadeluz"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
