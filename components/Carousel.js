const Carousel = ({ carousel }) => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        {carousel.map((item) => (
          <button
            key={item._id}
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to={Number(item._id) - 1}
            className={Number(item._id) === 1 ? 'active' : ''}
            aria-current={Number(item._id) === 1 ? 'true' : 'false'}
            aria-label={`Slide ${item._id}`}
          ></button>
        ))}
      </div>
      <div className='carousel-inner'>
        {carousel.map((item) => (
          <div
            key={item._id}
            className={
              Number(item._id) === 1
                ? 'carousel-item  active'
                : 'carousel-item '
            }
          >
            <img
              src={item.image}
              className='d-block'
              alt={item.title}
              style={{
                height: carousel[0].height,
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              className='carousel-caption d-none d-md-block animate__bounceIn'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1 fw-bold'>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel