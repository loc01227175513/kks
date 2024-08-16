import Banner1 from '../../../css/assets/images/banner/banner-01.png';
import BannerBg from '../../../css/assets/images/banner/banner-bg.png';
import Banner2 from '../../../css/assets/images/resource/02.png';
import '../../../css/assets/images/favicon.svg';
import Abount from '../../../css/assets/images/resource/about-us.png';
import Shapes from '../../../css/assets/images/shapes/shape-02.png';
import Shapes2 from '../../../css/assets/images/shapes/shape-01.png';
export default function News() {
  return (
    <>
      <figure className="wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible' }}>
        <img src={Banner1} alt="" />
      </figure>
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
        </div>
        <div className="relative">
          <div className="bg-cover bg-center" style={{ backgroundImage: `url(${BannerBg})` }}></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 md:w-full">
                <div className="text-left">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Better Future</h4>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-4xl font-bold">Advancing with <span className="text-red-800">Technology</span></h1>
                  </div>
                  <div className="mb-6">
                    <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses.</p>
                  </div>
                  <div>
                    <a href="#" className="inline-block bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700">
                      <i className="icon-02"></i> Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/6"></div>
              <div className="w-full lg:w-1/3 md:w-full">
                <div className="relative">
                  <div className="mb-6">
                    <img src={Banner2} alt="" className="rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm">years experience years experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-12">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Better Future</h4>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Explore Our Services</h2>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
        <div className="bg-red-950 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="icon-04 text-4xl"></i>
            <div className="ml-2"></div>
          </div>
          <div className="text-center mb-4 ">
            <h4 className="text-xl font-semibold">
              <a href="service-details.html" className="hover:text-red-800">SEO Marketing</a>
            </h4>
            <p>Providing legal advice, contract drafting, compliance assistance.</p>
          </div>
          <div className="text-center">
            <a href="service-details.html" className="text-red-800 hover:text-red-600">
              <i className="icon-05 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="bg-red-950 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="icon-08 text-4xl"></i>
            <div className="ml-2"></div>
          </div>
          <div className="text-center mb-4">
            <h4 className="text-xl font-semibold">
              <a href="service-details.html" className="hover:text-red-800">UX / UI Design</a>
            </h4>
            <p>Providing legal advice, contract drafting, compliance assistance.</p>
          </div>
          <div className="text-center">
            <a href="service-details.html" className="text-red-800 hover:text-red-600">
              <i className="icon-05 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="bg-red-950 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="icon-12 text-4xl"></i>
            <div className="ml-2"></div>
          </div>
          <div className="text-center mb-4">
            <h4 className="text-xl font-semibold">
              <a href="service-details.html" className="hover:text-red-800">Digital Marketing</a>
            </h4>
            <p>Providing legal advice, contract drafting, compliance assistance.</p>
          </div>
          <div className="text-center">
            <a href="service-details.html" className="text-red-800 hover:text-red-600">
              <i className="icon-05 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative py-12">
  <div className="relative">
    <div className="absolute inset-0" data-parallax='{"x": -50}' style={{ backgroundImage: `url(${Shapes})` }}></div>
  </div>
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold">DataMatrix</h1>
  </div>
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 md:w-full mb-8">
        <div className="relative">
          <figure className="wow zoomIn animated" data-wow-delay="100ms" data-wow-duration="1500ms">
            <img src={Abount} alt="" className="w-full" />
          </figure>
          <div className="relative bg-cover bg-center p-6" style={{ backgroundImage: `url(${Shapes2})` }}>
            <div className="text-center">
              <h1 className="text-4xl font-bold" data-speed="1500" data-stop="2">0</h1>
              <span className="text-xl">K+</span>
            </div>
            <p className="text-center mt-2">World wide Client</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/12"></div>
      <div className="w-full lg:w-5/12 md:w-full">
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">About Company</h4>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Enhancing Real-world Experiences with AR <span className="text-red-800">Technology</span>.</h2>
          </div>
          <div className="mb-6">
            <p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way.</p>
          </div>
          <div>
            <a href="about.html" className="inline-block bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700">
              <i className="icon-02"></i> About more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}