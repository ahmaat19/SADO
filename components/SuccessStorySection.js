import Link from 'next/link'
import Image from 'next/image'

const SuccessStorySection = ({ stories, loadMore = true }) => {
  return (
    <>
      <h2 className='fw-bold'>SUCCESS STORIES</h2>
      <p className='lead pb-3'>
        Our success stories are many but we highlight a few in our program
        areas. Our purpose in sharing these success stories is to encourage the
        youth, women and other vulnerable groups to take action and contribute
        to the development of the communities.
      </p>

      <div className='row gy-3'>
        {stories &&
          stories.length > 0 &&
          stories.map((story) => (
            <div key={story.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
              <div className='card shadow border-0 rounded-0 animate__bounceIn'>
                <Image
                  width={300}
                  height={300}
                  src={`https://api.sadosomalia.org${story.attributes.image.data[0].attributes.url}`}
                  alt={story.attributes.image.data[0].attributes.name}
                  className='card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h6 className='card-title'>{story.attributes.title}</h6>
                  <p className='card-text'>{story.attributes.caption}</p>
                  <Link href={`/stories/${story.attributes.slug}`}>
                    <a className='btn btn-outline-success btn-sm rounded-0 shadow'>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* load more stories */}
      {loadMore && (
        <div className='col-12 mt-5 text-center'>
          <Link href='/stories'>
            <a className='btn btn-outline-success btn-sm rounded-1 shadow'>
              Load More Stories
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

export default SuccessStorySection
