import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import { getVacanciesPostings } from '../utils/api'

const VacanciesPostings = ({ vacancies, error }) => {
  if (error) {
    return (
      <div className='mt-5'>
        {alertMessage({ status: error.status, message: error.message })}
      </div>
    )
  }

  const carousel = [
    {
      _id: 1,
      title: 'VACANCIES & POSTINGS',
      image: '/blank.jpg',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
    },
  ]

  return (
    <>
      <Meta title='Vacancies & Postings' description='Lorem ipsum' />
      <Navigation carousel={carousel} />

      <div className='container py-3' style={{ textAlign: 'justify' }}>
        <div className='row gy-3 my-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto text-centera'>
            <h3>Vacancies & Postings</h3>

            {vacancies &&
              vacancies.map((v) => (
                <div key={v.id} className='my-3'>
                  <h5>{v.attributes.title}</h5>
                  <p>{v.attributes.description}</p>
                  {v.attributes.download &&
                    v.attributes.download.data.map((d) => (
                      <a
                        href={`http://164.92.157.29${d.attributes.url}`}
                        key={d.id}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {v.attributes.title}
                      </a>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VacanciesPostings

export async function getServerSideProps() {
  try {
    const vacancies = await getVacanciesPostings()

    return {
      props: {
        vacancies: vacancies.data,
      },
    }
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    }
  }
}
