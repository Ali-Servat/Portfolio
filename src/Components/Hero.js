const Hero = () => {
     return (
          <div className=" container mt-5">
               <div className="row justify-content-center">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                         <h1>
                              <span
                                   className="d-inline-block text-center"
                                   style={{ color: 'coral' }}
                              >
                                   توسعه فرانت اند وب
                              </span>{' '}
                              <br />
                              <span
                                   className="display-6 text-center"
                                   style={{ display: 'block' }}
                              >
                                   (و به زودی بک اند)
                              </span>
                         </h1>
                    </div>
                    <div className="col-5 d-flex align-middle">
                         <img
                              style={{ width: '100%' }}
                              src="https://www.hostpapa.ca/blog/wp-content/uploads/2021/04/SEO-Web-Development-How-To-Fix-Common-SEO-Mistakes-header.jpg"
                              alt=""
                         />
                    </div>
               </div>
          </div>
     );
};

export default Hero;
