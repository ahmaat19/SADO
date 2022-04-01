import Image from 'next/image'

const PartnerSection = ({ partners }) => {
  return (
    <>
      <h2 className='fw-bold'>DONOR AND PARTNERS </h2>
      <p className='lead pb-3'>
        Some of our current and past donors and partners.
      </p>

      <div
        id='carouselExampleControls'
        className='carousel slide animate__bounceIn'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row gy-3'>
              {partners &&
                partners.length > 0 &&
                partners.slice(4, 8).map((partner) => (
                  <div
                    key={partner._id}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width='100%'
                      height='100%'
                      src={`http://164.92.157.29${partner.attributes.logo.data.attributes.url}`}
                      alt={partner.attributes.logo.data.attributes.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row gy-3'>
              {partners &&
                partners.length > 0 &&
                partners.slice(0, 4).map((partner) => (
                  <div
                    key={partner._id}
                    className='col-lg-2 col-md-4 col-6 mx-auto shadow text-center'
                  >
                    <Image
                      width={'100%'}
                      height={'100%'}
                      src={`http://164.92.157.29${partner.attributes.logo.data.attributes.url}`}
                      alt={partner.attributes.logo.data.attributes.name}
                      className='img-fluid'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default PartnerSection
